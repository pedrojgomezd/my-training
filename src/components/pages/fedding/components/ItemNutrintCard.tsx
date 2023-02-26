"use client";
import { Spinner } from "flowbite-react";
import { TItemFormsFood } from "../inputsFormFood";

interface ItemCardNutrientProps {
  item: TItemFormsFood;
  data: any;
  loading: boolean;
}

export const ItemCardNutrient = ({
  item,
  data,
  loading,
}: ItemCardNutrientProps) => {
  return (
    <div className="rounded-md overflow-hidden">
      <div className="p-1 bg-white ">
        <h3 className="text-xs text-gray-600 mb-2">
          {item?.icon} {item.label}
        </h3>
        {loading ? (
          <Spinner />
        ) : (
          <h2 className="font-bold text-lg font-mono text-gray-800 text-center">
            {data?.consumeDaily?.hasOwnProperty(item.name)
              ? Number(data?.consumeDaily[item.name]).toFixed(2)
              : 0}
          </h2>
        )}
      </div>
      {/* <div className="bg-blue-200 flex justify-between p-2">
          <p>Meta</p>
          <p className="font-mono">150</p>
        </div> */}
    </div>
  );
};
