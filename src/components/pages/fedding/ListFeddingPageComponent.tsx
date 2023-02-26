"use client"
import { Button } from "flowbite-react";
import { ListFoods } from "./components/ListFoods";
import Link from "next/link";

export const ListFeddingPageComponent = ({ items }) => {
  return (
    <div>
      <div className="bg-white p-2 flex justify-between items-center">
        <div><h3 className="font-semibold">Lista de alimentos</h3></div>
        <Link href="/feeding/create">
            <Button>+</Button>
        </Link>
      </div>
      <div className="p-4">
        <ListFoods items={items} />
      </div>
    </div>
  );
};
