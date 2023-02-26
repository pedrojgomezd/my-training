import admin from "@/firebase";
const firestore = admin.firestore();

export default async function handler(req, res) {
  const data = req.body;

  try {
    const response = await firestore.collection("food").add(data);
    res.status(201).json((await response.get()).data);
  } catch (error) {
    res.status(500).json({msg: "Error"});
  }
}
