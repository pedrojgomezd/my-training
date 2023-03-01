"use client";
import React from "react";
import Link from "next/link";
import { ReactNode } from "react";

export type BottomItemProps = {
  title: string;
  icon: ReactNode;
  link: string;
  isActive?: boolean;
};

export const BottomBarItem = ({
  title,
  icon,
  link,
  isActive,
}: BottomItemProps) => (
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
