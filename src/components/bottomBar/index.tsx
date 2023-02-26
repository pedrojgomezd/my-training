"use client";

import Link from "next/link";
import {
  FoodIcon,
  HomeIcon,
  MuscleIcon,
  NotifyIcon,
  ProfileIcon,
} from "../icons";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

export const BottomBar = () => {
  const pathname = usePathname();

  return (
    <div className="sticky bottom-0 bg-white w-full ">
      <div className="grid grid-flow-col grid-cols-5 place-items-center">
        {bottomLists.map((item, i) => (
          <BottomItem {...item} isActive={pathname === item.link} key={i} />
        ))}
      </div>
    </div>
  );
};

interface BottomItemProps {
  title: string;
  icon: ReactNode;
  link: string;
  isActive?: boolean;
}

const bottomLists: BottomItemProps[] = [
  { title: "Home", icon: <HomeIcon />, link: "/feeding" },
  { title: "Alimentacion", icon: <FoodIcon />, link: "/feeding" },
  { title: "Rutina", icon: <MuscleIcon />, link: "/construction" },
  { title: "Perfil", icon: <ProfileIcon />, link: "/construction" },
  { title: "Notificaciones", icon: <NotifyIcon />, link: "/construction" },
];

const BottomItem = ({ title, icon, link, isActive }: BottomItemProps) => (
  <Link
    href={link}
    className={`flex flex-col justify-center items-center hover:bg-slate-400 w-full p-2 ${
      isActive ? "bg-slate-400" : "bg-white"
    }`}
  >
    {icon}
    <span className="text-xs mt-2">{title}</span>
  </Link>
);
