import admin from "@/firebase";
const firestore = admin.firestore();

export default async function handler(req, res) {
  const { name, description, cover, videos, images, regions } = req.body;

  const dataForm = {
    name,
    description,
    cover,
    videos: stringToArray(videos),
    images: stringToArray(images),
    regions: stringToArray(regions),
  }

  const response = await firestore.collection("trainings").add(dataForm)

  res.status(200).json("Success");
}


const stringToArray = (value) => {
  return value.split(",")
}