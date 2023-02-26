import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { serverConfig } from "@/firebase/server-config";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("session")?.value;
  const user = await getUser(token);
  const url = request.nextUrl.clone();

  if (!user && request.nextUrl.pathname !== "/login") {
    const prevUrl = url.pathname;
    url.pathname = "/login";
    url.search = `redirect=${prevUrl}${url.search}`;
    return NextResponse.redirect(url);
  }

  if (user && request.nextUrl.pathname === "/login") {
    url.pathname = "/feeding";
    return NextResponse.redirect(url);
  }
}

const getUser = async (token) => {
  if (!token) {
    return null;
  }
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/api/auth/profile`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      cookie: `session=${token}`,
    },
  });

  const user = await response.json();

  return user;
};

export const config = {
  matcher: ["/", "/feeding", "/login"],
};
