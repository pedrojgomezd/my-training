import admin from "@/firebase";

export default async function handler(req, res) {
  const firestore = admin.firestore();

  const response = await firestore.collection("trainings").get();

  const data = response.docs.map((training) => ({
    id: training.id,
    ...training.data(),
  }));

  res.status(200).json( data );
}
