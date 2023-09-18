"use client";

import { useEffect, useState } from "react";

import { itemFormsFoodsNutrients } from "./inputsFormFood";
import { ModalAddFoodDaily } from "./ModalAddFoodDaily";
import { ListFoods } from "./components/ListFoods";
import { MoreNutrient } from "./components/MoreNutrient";
import { ItemCardNutrient } from "./components/ItemNutrintCard";
import { Button } from "flowbite-react";
import { FormNewFood } from "./form-new-food";
import { TotalFoodsNutrients } from "./TotalFoodsNutrients";

export const FeddingPageComponent = ({
  foods = [],
  foodsDaily = { data: [] },
}) => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <div className="p-4">
      <div>
        <div className="grid grid-flow-col gap-4">
          {/* {itemFormsFoodsNutrients.map((item) => (
            <ItemCardNutrient
              loading={false}
              key={item.name}
              {...{ item }}
              data={foodsDaily}
            />
          ))} */}
        </div>
        {/* <MoreNutrient foodsDaily={foodsDaily} /> */}
      </div>
      <div className="mt-4">
        {foodsDaily?.data && <TotalFoodsNutrients items={foodsDaily?.data} />}
        {foodsDaily?.data && <ListFoods items={foodsDaily?.data} />}
        <FormNewFood />
      </div>
    </div>
  );
};
