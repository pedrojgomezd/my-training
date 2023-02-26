import { NextApiRequest, NextApiResponse } from "next";
import { admin } from "src/firebase";

type TMethod = "POST" | "GET" | "PUT";

export const authMiddleware = async (
  req: NextApiRequest,
  res: NextApiResponse,
  method: TMethod[] = ["GET"]
): Promise<any> => {
  if (!method.find((m) => m === req.method.toString())) {
    res.status(404).json({ response: "Page not exist" });
    return;
  }

  const sessionCookie = req.cookies.session || "";
  return admin
    .auth()
    .verifySessionCookie(sessionCookie, true)
    .then((decodeClaims) => {
      return decodeClaims;
    })
    .catch((erro) => {
      return erro;
    });
};

