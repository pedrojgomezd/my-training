// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";
import { admin } from "src/firebase";
import { serialize, CookieSerializeOptions } from "cookie";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const options: CookieSerializeOptions = {
    maxAge: 0,
    expires: new Date(Date.now()),
    httpOnly: true,
    secure: true,
    path: "/",
  };

  res.setHeader(
    "Set-Cookie",
    serialize("session", null, options)
  );
  // res.setHeader('session', sessionCookie, options);
  res.end(res.getHeader("session"));
}
