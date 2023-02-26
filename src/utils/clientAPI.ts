export const clientAPI = (
  route: string,
  body: string = null
): Promise<Response> =>
  fetch(`${process.env.NEXT_PUBLIC_API}/api/${route}`, {
    cache: "no-store",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body,
  });
