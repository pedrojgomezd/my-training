// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";
import { admin } from "src/firebase";
import { serialize, CookieSerializeOptions } from "cookie";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const idToken = req.body.idToken;
  console.log({ r: req.body });
  // const csrfToken = req.body.csrfToken.toString();

  // if (csrfToken !== req.cookies.csrfToken) {
  //   res.status(401).send('UNAUTHORIZED REQUEST!');
  //   return;
  // }

  const expiresIn = 60 * 60 * 24 * 5 * 1000;

  admin
    .auth()
    .createSessionCookie(idToken, { expiresIn })
    .then(
      (sessionCookie) => {
        // Set cookie policy for session cookie.

        const options: CookieSerializeOptions = {
          maxAge: expiresIn,
          expires: new Date(Date.now() + expiresIn * 1000),
          httpOnly: true,
          secure: true,
          path: "/",
        };

        res.setHeader(
          "Set-Cookie",
          serialize("session", sessionCookie, options)
        );
        // res.setHeader('session', sessionCookie, options);
        res.end(res.getHeader("session"));
      },
      (error) => {
        res.status(401).send("UNAUTHORIZED REQUEST!");
      }
    );
}
