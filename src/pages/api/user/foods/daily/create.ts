import admin from "@/firebase";
import { authMiddleware } from "@/utils/authMiddleware";
const firestore = admin.firestore();

export default async function handler(req, res) {
  const data = req.body;

  try {
    const user = await authMiddleware(req, res, ["POST"]);

    const response = await firestore
      .collection("users")
      .doc(user.uid)
      .collection("foods")
      .add({
        ...data,
        createAt: admin.firestore.Timestamp.now(),
        updateAt: admin.firestore.Timestamp.now(),
      });

    res.status(201).json({ ...(await response.get()).data() });
  } catch (error) {
    res.status(500).json({ msg: "Error" });
  }
}
