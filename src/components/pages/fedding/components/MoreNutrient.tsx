"use client";
import { Button } from "flowbite-react";
import { useState } from "react";

import { nutrientsTypesAll } from "@/utils/typesFood";
import { ItemCardNutrient } from "./ItemNutrintCard";

const nutrienTranform = nutrientsTypesAll.map((item) => ({
  name: item.value,
  label: item.label.es,
  icon: item.label.emoji,
}));

export const MoreNutrient = ({ foodsDaily }) => {
  const [seeMore, setSeeMore] = useState(false);

  return (
    <div className="mt-4">
      <div
        className={`p-4 flex justify-center ${seeMore ? "block" : "hidden"}`}
      >
        <Button
          outline={true}
          gradientDuoTone="purpleToBlue"
          size="xs"
          onClick={() => setSeeMore((old) => !old)}
        >
          {seeMore ? "Ver menos" : "Ver mas"}
        </Button>
      </div>
      <div className={`${seeMore ? "block" : "hidden"}`}>
        <div className="grid grid-cols-4 gap-4 ">
          {nutrienTranform.map((item) => (
            <ItemCardNutrient
              loading={false}
              key={item.name}
              item={item}
              data={foodsDaily}
            />
          ))}
        </div>
      </div>
      <div className="p-4 flex justify-center">
        <Button
          outline={true}
          gradientDuoTone="purpleToBlue"
          size="xs"
          onClick={() => setSeeMore((old) => !old)}
        >
          {seeMore ? "Ver menos" : "Ver mas"}
        </Button>
      </div>
    </div>
  );
};
