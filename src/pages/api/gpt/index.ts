// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import admin from "@/firebase";
import { authMiddleware } from "@/utils/authMiddleware";
import { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

const firestore = admin.firestore();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const user = await authMiddleware(req, res, ["POST"]);
  const { data, food } = req.body;
  const menssage = `Con la información de alimentos que te voy a decir créame un JSON con esta estructura 

  foods: name, nutrients: con el nombre y el total nutrientes como proteinas, carbohidratos, grasas, fibras, calorias
  
  totals: con el total de la suma de todos los nutrientes.
  
  y no adiciones ningun texto ademas del json

  toda la información en inglés solo manten el nombre del alimento en español 
  
  ${data} `;

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_SECRET_KEY,
  });

  try {
    const GPTOutput = await openai.chat.completions.create({
      messages: [
        {
          role: "user",
          content: menssage,
        },
      ],
      model: "gpt-3.5-turbo",
    });

    const output_text = GPTOutput.choices;
    console.log({ GTPCONTENT: output_text[0].message.content });
    const response = await firestore
      .collection("users")
      .doc(user.uid)
      .collection("foods-test")
      .add({
        name: food,
        ...JSON.parse(output_text[0].message.content),
        createAt: admin.firestore.Timestamp.now(),
        updateAt: admin.firestore.Timestamp.now(),
      });

    res
      .status(401)
      .json({ data: JSON.parse(output_text[0].message.content), id: user.uid });
  } catch (err) {
    if (err.response) {
      console.log(err.response.status);
      console.log(err.response.data);
    } else {
      console.log(err.message);
    }
  }
}
