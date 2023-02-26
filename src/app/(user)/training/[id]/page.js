import { Galery } from "@/components/galery";
import { VideoPlayer } from "@/components/videoPlayer";

const getData = async (id) => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API}/api/trainings/${id}`,
    { cache: "no-store" }
  );

  return data.json();
};

export default async function Training({ params }) {
  const training = await getData(params.id);

  return (
    <main className="p-2 flex flex-col gap-4">
      <div>
        <h1 className="text-xl font-bold">{training.name}</h1>
      </div>
      <VideoPlayer videos={training?.videos} />
      <div>
        <ul className="flex gap-1 font-light text-xs">
          {training?.regions.map((region) => (
            <li
              className="bg-emerald-300 text-emerald-900 p-[2px] rounded-sm"
              key={region}
            >
              {region}
            </li>
          ))}
        </ul>
      </div>
      <div className="text-xs">{training.description}</div>
      <div>
        <h3 className="text-xl font-extrabold">Region ejercitada</h3>
        <div>
          <Galery images={training.images} />
        </div>
      </div>
    </main>
  );
}
