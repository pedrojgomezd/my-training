"use client";

import { Button, ButtonProps } from "flowbite-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

interface ButtonFloatProps extends ButtonProps {}

export const ButtonFloat = ({ ...props }: ButtonFloatProps) => (
  <div className="absolute bottom-24 right-4">
    <Button pill gradientDuoTone="cyanToBlue" size="xl" {...props}>
      +
    </Button>
  </div>
);
