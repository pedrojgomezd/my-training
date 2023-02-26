"use client";
import { useAuth } from "@/auth/hooks";
import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import Link from "next/link";


export const NavBar = () => {
  const { tenant: profile, logout, login } = useAuth();
  
  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand href="/" as={Link}>
        <img
          src="https://img.favpng.com/8/25/0/fitness-centre-ico-physical-fitness-icon-png-favpng-0EVJtkBCbU6x2B1hFzfUi3QPQ.jpg"
          className="mr-3 h-6 sm:h-9"
          alt="Trinning"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Trainnigimg
        </span>
      </Navbar.Brand>
      {profile ? (
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={
              <Avatar
                alt="User settings"
              
                img={profile?.picture}
                rounded={true}
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">{profile?.name} </span>
              <span className="block truncate text-sm font-medium">
                {profile?.email}
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={logout}>Salir</Dropdown.Item>
          </Dropdown>
        </div>
      ) : (
        <div>
          <Button onClick={login}>Entrar</Button>
        </div>
      )}
    </Navbar>
  );
};
