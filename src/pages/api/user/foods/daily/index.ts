import admin from "@/firebase";
import { authMiddleware } from "@/utils/authMiddleware";
import { nutrientsTypesAll } from "@/utils/typesFood";
const firestore = admin.firestore();

export default async function handler(req, res) {
  const { date } = req.body;

  try {
    const user = await authMiddleware(req, res, ["POST"]);
    
    const response = await firestore
      .collection("users")
      .doc(user.uid)
      .collection("foods")
      .where(
        "createAt",
        ">",
        admin.firestore.Timestamp.fromDate(new Date(new Date().toLocaleDateString("en-US")))
      )
      .get();

    const data = response.docs.map((doc) => ({
      id: doc.id,
      createtAd: doc.data().createAt.toDate().toLocaleTimeString("es-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      ...doc.data(),
    }));

    res.status(201).json({ data, consumeDaily: calcNutrientConsumed(data) });
  } catch (error) {
    res.status(500).json({ msg: "Error" });
  }
}

const calcNutrientConsumed = (data) => {
  const nutrients = nutrientsTypesAll.map((nu) => nu.value);

  const nutrienteWithValue = nutrients.map((nutrient) => ({
    [nutrient]: 0,
  }));
  const intialValues = convertNutrientArrayToObject(nutrienteWithValue);

  const response = data.reduce((acum, actual, index) => {
    let nutrientValues = {};
    nutrients.forEach((nut) => {
      nutrientValues[nut] = acum[nut] +=
        (actual[nut] / actual.portion) * actual.quantity;
    });
    return nutrientValues;
  }, intialValues);

  return response;
};

function convertNutrientArrayToObject(nutrientArray) {
  let nutrientObject = {};
  nutrientArray.forEach((nutrient) => {
    let nutrientName = Object.keys(nutrient)[0];
    nutrientObject[nutrientName] = nutrient[nutrientName];
  });
  return nutrientObject;
}
