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
        <div>{item.food}</div>
      </div>
      <div className={`bg-gray-100 p-2 ${open ? "block" : "hidden"}`}>
        {Object.keys(item).map((key, index) => {
          if (["createAt", "updateAt", "id", "createtAd"].includes(key)) {
            return null;
          }
          return (
            <div key={index}>
              {key.toString()} : {item[key].toString()}
            </div>
          );
        })}
      </div>
    </div>
  );
};
