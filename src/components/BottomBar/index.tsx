"use client";

import { usePathname } from "next/navigation";
import { bottomLists } from "@/settings";
import { BottomBarItem } from "./BottomBarItem";

export const BottomBar = () => {
  const pathname = usePathname();

  return (
    <div className="sticky bottom-0 bg-white w-full ">
      <div className="grid grid-flow-col grid-cols-5 place-items-center">
        {bottomLists.map((item, i) => (
          <BottomBarItem {...item} isActive={pathname === item.link} key={i} />
        ))}
      </div>
    </div>
  );
};
