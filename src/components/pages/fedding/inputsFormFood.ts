import { InputHTMLAttributes } from "react";

export interface TItemFormsFood extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  isRemovable?: boolean;
  isMesurable?: boolean;
  icon?: string;
}

export const itemFormsFoodsNutrients: TItemFormsFood[] = [
  {
    name: "calories",
    type: "number",
    inputMode: "decimal",
    id: "caloris-form",
    label: "Calorias",
    placeholder: "200.00",
    required: true,
    isMesurable: true,
    step: "0.01",
  },
  {
    name: "carbohydrates",
    type: "number",
    inputMode: "decimal",
    id: "carbohydrates-form",
    label: "Carbohidratos",
    placeholder: "4.2",
    required: true,
    isMesurable: true,
    step: "0.01",
  },
  {
    name: "protein",
    type: "number",
    inputMode: "decimal",
    id: "protein-form",
    label: "Proteina",
    placeholder: "4.2",
    required: true,
    isMesurable: true,
    step: "0.01",
  },
  {
    name: "sugar",
    type: "number",
    inputMode: "decimal",
    id: "sugar-form",
    label: "Azucar",
    placeholder: "4.2",
    required: true,
    isMesurable: true,
    step: "0.01",
  },
];

export const itemFormsFoods: TItemFormsFood[] = [
  {
    name: "food",
    type: "text",
    id: "food-form",
    label: "Nombre de Alimento",
    placeholder: "Nombre",
    required: true,
  },
  {
    name: "portion",
    type: "number",
    inputMode: "decimal",
    id: "qunatity-form",
    label: "Cantidad por porcion",
    placeholder: "100",
    required: true,
    isMesurable: true,
    step: "0.01",
  },
  ...itemFormsFoodsNutrients,
];
