import admin from "@/firebase";
const firestore = admin.firestore();

export default async function handler(req, res) {
  try {
    const response = await firestore.collection("food").get();

    const data = response.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ msg: "Error" });
  }
}
