// export const typesFood = [
//   "grain",
//   "carb",
//   "snack",
//   "legume",
//   "nut",
//   "seed",
//   "fruit",
//   "vegetable",
//   "superfood",
//   "leafy green vegetable",
//   "bread",
//   "supplement",
// ];

export const typesFood = [
  { value: "grain", label: { es: "Grano", emoji: "πΎ" } },
  { value: "carbohydrates", label: { es: "Carbohidratos", emoji: "π" } },
  { value: "snack", label: { es: "Snack", emoji: "πΏ" } },
  { value: "legume", label: { es: "Legumbre", emoji: "π₯¦" } },
  { value: "nut", label: { es: "Fruto seco", emoji: "π₯" } },
  { value: "seed", label: { es: "Semilla", emoji: "π±" } },
  { value: "fruit", label: { es: "Fruta", emoji: "π" } },
  { value: "vegetable", label: { es: "Verdura", emoji: "π₯" } },
  { value: "superfood", label: { es: "Superalimento", emoji: "π₯" } },
  {
    value: "leafy green vegetable",
    label: { es: "Verdura de hoja verde", emoji: "π₯¬" },
  },
  { value: "bread", label: { es: "Pan", emoji: "π" } },
  { value: "supplement", label: { es: "Suplemento", emoji: "π" } },
];

const nutrientTypes = [
  { value: "protein", label: { es: "ProteΓ­na", emoji: "π₯©" } },
  { value: "carbohydrates", label: { es: "Carbohidratos", emoji: "π" } },
  { value: "fat", label: { es: "Grasa", emoji: "π₯" } },
  { value: "fiber", label: { es: "Fibra", emoji: "πΎ" } },
  { value: "sugar", label: { es: "AzΓΊcar", emoji: "π­" } },
  { value: "starch", label: { es: "AlmidΓ³n", emoji: "π₯" } },
  { value: "saturated-fat", label: { es: "Grasa saturada", emoji: "π" } },
  { value: "trans-fat", label: { es: "Grasa trans", emoji: "π«" } },
  {
    value: "monounsaturated-fat",
    label: { es: "Grasa monoinsaturada", emoji: "π₯" },
  },
  {
    value: "polyunsaturated-fat",
    label: { es: "Grasa poliinsaturada", emoji: "π" },
  },
  { value: "cholesterol", label: { es: "Colesterol", emoji: "π₯" } },
  { value: "sodium", label: { es: "Sodio", emoji: "π§" } },
  { value: "potassium", label: { es: "Potasio", emoji: "π" } },
  { value: "calcium", label: { es: "Calcio", emoji: "π₯" } },
  { value: "phosphorus", label: { es: "FΓ³sforo", emoji: "π¦΄" } },
  { value: "magnesium", label: { es: "Magnesio", emoji: "π«" } },
  { value: "iron", label: { es: "Hierro", emoji: "π" } },
  { value: "zinc", label: { es: "Zinc", emoji: "π½" } },
  { value: "copper", label: { es: "Cobre", emoji: "π" } },
  { value: "manganese", label: { es: "Manganeso", emoji: "π§ͺ" } },
  { value: "selenium", label: { es: "Selenio", emoji: "π" } },
  { value: "iodine", label: { es: "Yodo", emoji: "π£" } },
  { value: "chromium", label: { es: "Cromo", emoji: "π₯«" } },
  { value: "molybdenum", label: { es: "Molibdeno", emoji: "π§ͺ" } },
  { value: "vitamins", label: { es: "Vitaminas", emoji: "π" } },
  { value: "minerals", label: { es: "Minerales", emoji: "βοΈ" } },
];
const vitaminTypes = [
  { value: "vitamin-a", label: { es: "Vitamina A", emoji: "π₯" } },
  {
    value: "vitamin-b1-(thiamin)",
    label: { es: "Vitamina B1 (Tiamina)", emoji: "π" },
  },
  {
    value: "vitamin-b2-(riboflavin)",
    label: { es: "Vitamina B2 (Riboflavina)", emoji: "π₯" },
  },
  {
    value: "vitamin-b3-(niacin)",
    label: { es: "Vitamina B3 (Niacina)", emoji: "π" },
  },
  {
    value: "vitamin-b5-(pantothenic-acid)",
    label: { es: "Vitamina B5 (Γcido pantotΓ©nico)", emoji: "π" },
  },
  { value: "vitamin-b6", label: { es: "Vitamina B6", emoji: "π₯" } },
  {
    value: "vitamin-b7-(biotin)",
    label: { es: "Vitamina B7 (Biotina)", emoji: "π₯" },
  },
  {
    value: "vitamin-b9-(folate)",
    label: { es: "Vitamina B9 (Γcido fΓ³lico)", emoji: "π" },
  },
  { value: "vitamin-b12", label: { es: "Vitamina B12", emoji: "π₯©" } },
  { value: "vitamin-c", label: { es: "Vitamina C", emoji: "π" } },
  { value: "vitamin-d", label: { es: "Vitamina D", emoji: "βοΈ" } },
  { value: "vitamin-e", label: { es: "Vitamina E", emoji: "π₯" } },
  { value: "vitamin-k", label: { es: "Vitamina K", emoji: "π₯¦" } },
];
const mineralTypes = [
  { value: "calcium", label: { es: "Calcio", emoji: "π₯" } },
  { value: "iron", label: { es: "Hierro", emoji: "π" } },
  { value: "magnesium", label: { es: "Magnesio", emoji: "π₯¦" } },
  { value: "phosphorus", label: { es: "FΓ³sforo", emoji: "π₯©" } },
  { value: "potassium", label: { es: "Potasio", emoji: "π" } },
  { value: "sodium", label: { es: "Sodio", emoji: "π§" } },
  { value: "zinc", label: { es: "Zinc", emoji: "π¦·" } },
  { value: "copper", label: { es: "Cobre", emoji: "π΄" } },
  { value: "manganese", label: { es: "Manganeso", emoji: "π" } },
  { value: "selenium", label: { es: "Selenio", emoji: "π" } },
  { value: "iodine", label: { es: "Yodo", emoji: "π£" } },
  { value: "chromium", label: { es: "Cromo", emoji: "π₯¦" } },
  { value: "molybdenum", label: { es: "Molibdeno", emoji: "π§ͺ" } },
  { value: "fluoride", label: { es: "FlΓΊor", emoji: "π°" } },
  { value: "chloride", label: { es: "Cloruro", emoji: "π§ͺ" } },
];

const extra = [{ value: "calories", label: { es: "Calorias", emoji: "βοΈ" } }];

export const nutrientsTypesAll = [
  ...nutrientTypes,
  ...vitaminTypes,
  ...mineralTypes,
  ...extra,
];
