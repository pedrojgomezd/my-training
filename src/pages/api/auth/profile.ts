// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";
import { admin } from "src/firebase";
import { serialize, CookieSerializeOptions } from "cookie";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const sessionCookie = req.cookies.session || "";
  console.log({ sessionCookie });
  admin
    .auth()
    .verifySessionCookie(sessionCookie, true)
    .then((decodeClaims) => {
      res.status(200).json(decodeClaims);
    })
    .catch((erro) => {
      res.status(401).json({ end: "Error" });
    });
}
