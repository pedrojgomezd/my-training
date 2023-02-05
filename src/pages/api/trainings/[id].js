import admin from "@/firebase";

export default async function handler(req, res) {
  const { id } = req.query;

  const firestore = admin.firestore();

 const response = await firestore.collection("training").doc(id).get();

  const data = {
    id: response.id,
    ...response.data(),
  };

  res.status(200).json(data);
}
