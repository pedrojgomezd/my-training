
import { BottomBar } from "@/components/bottomBar";

export default async function UserLayout({ children }) {
  return (
    <main>
      <div className="mx-auto min-h-screen">{children}</div>

      <BottomBar />
    </main>
  );
}
