import { BottomItemProps } from "@/components/BottomBar/BottomBarItem";
import {
  FoodIcon,
  HomeIcon,
  MuscleIcon,
  NotifyIcon,
  ProfileIcon,
} from "@/components/icons";

export const bottomLists: BottomItemProps[] = [
  { title: "Home", icon: <HomeIcon />, link: "/home" },
  { title: "Alimentacion", icon: <FoodIcon />, link: "/feeding" },
  { title: "Rutina", icon: <MuscleIcon />, link: "/construction" },
  { title: "Perfil", icon: <ProfileIcon />, link: "/construction" },
  { title: "Notificaciones", icon: <NotifyIcon />, link: "/construction" },
];
