"use client";
import { clientAPI } from "@/utils/clientAPI";
import { Button, Spinner } from "flowbite-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const ListFoods = ({ items }) => {
  return (
    <div className="flex flex-col gap-2">
      {items?.map((item) => (
        <ListFoodItem key={item.id} item={item} />
      ))}
    </div>
  );
};

const ListFoodItem = ({ item }) => {
  const [open, setOpen] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const router = useRouter();

  const handleDeleteItem = async () => {
    try {
      setDeleting(true);
      const r = await clientAPI(
        "gpt/delete",
        JSON.stringify({ foodId: item.id })
      );
      router.refresh();
    } catch (error) {
      setDeleting(true);
      alert("reintentar eliminar");
    }
  };

  return (
    <div
      className="rounded-md overflow-hidden"
      onClick={() => setOpen((old) => !open)}
    >
      <div className="bg-white  shadow-md p-4">
        <div className="flex justify-between">
          <div className="text-xl font-bold mb-4">{item.name}</div>
          <div>
            <Button onClick={handleDeleteItem} size={"xs"} color="failure" pill>
              {deleting ? <Spinner /> : "X"}
            </Button>
          </div>
        </div>
        <ul className="grid grid-cols-3 gap-2">
          {Object.keys(item.totals).map((key, index) => {
            if (["createAt", "updateAt", "id", "createtAd"].includes(key)) {
              return null;
            }
            return (
              <li key={index} className="">
                <p className="text-xs text-slate-600 text-center capitalize">
                  {key.toString()}
                </p>
                <p className="text-2xl font-bold text-center p-0 text-cyan-600">
                  {item.totals[key].toString()}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={`bg-gray-100 p-2 ${open ? "block" : "hidden"}`}>
        {item.foods.map((i) => {
          return (
            <div key={i.name} className="m-4">
              <h4 className="text-lg">{i.name}</h4>
              {/* <p>{JSON.stringify(i)}</p> */}

              {Object.keys(i.nutrients).map((key, index) => {
                if (["createAt", "updateAt", "id", "createtAd"].includes(key)) {
                  return null;
                }
                return (
                  <div key={index}>
                    {key.toString()} : {i.nutrients[key].toString()}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};
