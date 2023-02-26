import { ListTrainings } from "@/components/ListTrainings";

const getData = async () => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API}/api/trainings`, {
    cache: "no-store",
  });

  return data.json();
};

export default async function Home() {
  // const trainings = await getData();

  return (
    <main className="p-2">
      <ListTrainings trainings={[]} />
    </main>
  );
}
