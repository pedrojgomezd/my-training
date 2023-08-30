"use client";
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

  return (
    <div
      className="rounded-md overflow-hidden"
      onClick={() => setOpen((old) => !open)}
    >
      <div className="bg-white  shadow-md p-2">
        <div>{item.name}</div>
        <ul>
          {Object.keys(item.totals).map((key, index) => {
            if (["createAt", "updateAt", "id", "createtAd"].includes(key)) {
              return null;
            }
            return (
              <li key={index}>
                {key.toString()} : {item.totals[key].toString()}
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
