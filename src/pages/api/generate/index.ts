
import { authMiddleware } from "@/utils/authMiddleware";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import OpenAI from "openai";



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const user = await authMiddleware(req, res, ["GET"]);

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_SECRET_KEY,
  });

 const i = await openai.images.generate({prompt: "A muscular man performing squats on a Smith machine at the gym, illuminated by vibrant blue lights. His focused expression and controlled movements highlight his dedication to the workout, while the atmospheric blue lighting adds an energetic and captivating ambiance to the scene.", n: 1, size: "256x256", })

 res.json({data: i.data[0]})
}
