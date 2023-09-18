import { ServerAuthProvider } from "@/auth/server-auth-provider";
import { FeddingPageComponent } from "@/components/pages/fedding";
import { clientAPI } from "@/utils/clientAPI";
import { cookies } from "next/headers";

const fethFoodsDaily = async () => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API}/api/user/foods/daily`,
    {
      method: "POST",
      credentials: "include",
      headers: {
        cookie: `session=${cookies().get("session")?.value}`,
      },
    }
  );
  return await data.json();
};

export default async function FeedingPage() {
  const daily = await fethFoodsDaily();
  return (
    <main>
      <FeddingPageComponent foodsDaily={daily} />
    </main>
  );
}
