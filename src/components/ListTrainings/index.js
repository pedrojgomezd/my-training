import Link from "next/link";

export const ListTrainings = ({ trainings }) => {
   return (
    <div className="flex flex-col gap-2">
      {trainings ? (
        trainings.map((trainig) => (
          <ItemTrainig key={trainig.id} {...trainig} />
        ))
      ) : (
        <div>Sin entranmeinto</div>
      )}
    </div>
  );
};

const ItemTrainig = ({ id, name, description, videos, cover, regions }) => (
  <Link
    href={`/training/${id}`}
    className="bg-white rounded-sm p-2 flex gap-2 justify-items-center"
  >
    <img src={cover} className="w-10 h-10 rounded-md border-gray-200 border-2 border-solid" />
    <div>
      <h2 className="font-bold">{name}</h2>
      <h4 className="font-light text-sm">{description?.slice(0, 64) }</h4>
      <ul className="flex gap-1 font-light text-xs">
        {regions?.map((region) => (
          <li className="bg-emerald-300 text-emerald-900 p-[2px] rounded-sm" key={region}>
            {region}
          </li>
        ))}
      </ul>
    </div>
  </Link>
);
