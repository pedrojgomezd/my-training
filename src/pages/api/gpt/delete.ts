// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import admin from "@/firebase";
import { authMiddleware } from "@/utils/authMiddleware";
import { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

const firestore = admin.firestore();

const regex = /(\{.*\})/;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const user = await authMiddleware(req, res, ["POST"]);
  const { foodId } = req.body;
  try {
    const response = await firestore
      .collection("users")
      .doc(user.uid)
      .collection("foods-test")
      .doc(foodId)
      .delete();
  } catch (err) {
    if (err.response) {
      console.log(err.response.status);
      console.log(err.response.data);
    } else {
      console.log(err.message);
    }
  }
}
