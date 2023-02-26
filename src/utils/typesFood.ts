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
  { value: "grain", label: { es: "Grano", emoji: "🌾" } },
  { value: "carbohydrates", label: { es: "Carbohidratos", emoji: "🍞" } },
  { value: "snack", label: { es: "Snack", emoji: "🍿" } },
  { value: "legume", label: { es: "Legumbre", emoji: "🥦" } },
  { value: "nut", label: { es: "Fruto seco", emoji: "🥜" } },
  { value: "seed", label: { es: "Semilla", emoji: "🌱" } },
  { value: "fruit", label: { es: "Fruta", emoji: "🍎" } },
  { value: "vegetable", label: { es: "Verdura", emoji: "🥕" } },
  { value: "superfood", label: { es: "Superalimento", emoji: "🥑" } },
  {
    value: "leafy green vegetable",
    label: { es: "Verdura de hoja verde", emoji: "🥬" },
  },
  { value: "bread", label: { es: "Pan", emoji: "🍞" } },
  { value: "supplement", label: { es: "Suplemento", emoji: "💊" } },
];

const nutrientTypes = [
  { value: "protein", label: { es: "Proteína", emoji: "🥩" } },
  { value: "carbohydrates", label: { es: "Carbohidratos", emoji: "🍞" } },
  { value: "fat", label: { es: "Grasa", emoji: "🥑" } },
  { value: "fiber", label: { es: "Fibra", emoji: "🌾" } },
  { value: "sugar", label: { es: "Azúcar", emoji: "🍭" } },
  { value: "starch", label: { es: "Almidón", emoji: "🥔" } },
  { value: "saturated-fat", label: { es: "Grasa saturada", emoji: "🍔" } },
  { value: "trans-fat", label: { es: "Grasa trans", emoji: "🚫" } },
  {
    value: "monounsaturated-fat",
    label: { es: "Grasa monoinsaturada", emoji: "🥑" },
  },
  {
    value: "polyunsaturated-fat",
    label: { es: "Grasa poliinsaturada", emoji: "🐟" },
  },
  { value: "cholesterol", label: { es: "Colesterol", emoji: "🥚" } },
  { value: "sodium", label: { es: "Sodio", emoji: "🧂" } },
  { value: "potassium", label: { es: "Potasio", emoji: "🍌" } },
  { value: "calcium", label: { es: "Calcio", emoji: "🥛" } },
  { value: "phosphorus", label: { es: "Fósforo", emoji: "🦴" } },
  { value: "magnesium", label: { es: "Magnesio", emoji: "🍫" } },
  { value: "iron", label: { es: "Hierro", emoji: "🍔" } },
  { value: "zinc", label: { es: "Zinc", emoji: "🌽" } },
  { value: "copper", label: { es: "Cobre", emoji: "🔌" } },
  { value: "manganese", label: { es: "Manganeso", emoji: "🧪" } },
  { value: "selenium", label: { es: "Selenio", emoji: "🐟" } },
  { value: "iodine", label: { es: "Yodo", emoji: "🍣" } },
  { value: "chromium", label: { es: "Cromo", emoji: "🥫" } },
  { value: "molybdenum", label: { es: "Molibdeno", emoji: "🧪" } },
  { value: "vitamins", label: { es: "Vitaminas", emoji: "🍊" } },
  { value: "minerals", label: { es: "Minerales", emoji: "⛏️" } },
];
const vitaminTypes = [
  { value: "vitamin-a", label: { es: "Vitamina A", emoji: "🥕" } },
  {
    value: "vitamin-b1-(thiamin)",
    label: { es: "Vitamina B1 (Tiamina)", emoji: "🍞" },
  },
  {
    value: "vitamin-b2-(riboflavin)",
    label: { es: "Vitamina B2 (Riboflavina)", emoji: "🥛" },
  },
  {
    value: "vitamin-b3-(niacin)",
    label: { es: "Vitamina B3 (Niacina)", emoji: "🐟" },
  },
  {
    value: "vitamin-b5-(pantothenic-acid)",
    label: { es: "Vitamina B5 (Ácido pantoténico)", emoji: "🍄" },
  },
  { value: "vitamin-b6", label: { es: "Vitamina B6", emoji: "🥔" } },
  {
    value: "vitamin-b7-(biotin)",
    label: { es: "Vitamina B7 (Biotina)", emoji: "🥚" },
  },
  {
    value: "vitamin-b9-(folate)",
    label: { es: "Vitamina B9 (Ácido fólico)", emoji: "🍃" },
  },
  { value: "vitamin-b12", label: { es: "Vitamina B12", emoji: "🥩" } },
  { value: "vitamin-c", label: { es: "Vitamina C", emoji: "🍊" } },
  { value: "vitamin-d", label: { es: "Vitamina D", emoji: "☀️" } },
  { value: "vitamin-e", label: { es: "Vitamina E", emoji: "🥑" } },
  { value: "vitamin-k", label: { es: "Vitamina K", emoji: "🥦" } },
];
const mineralTypes = [
  { value: "calcium", label: { es: "Calcio", emoji: "🥛" } },
  { value: "iron", label: { es: "Hierro", emoji: "🍖" } },
  { value: "magnesium", label: { es: "Magnesio", emoji: "🥦" } },
  { value: "phosphorus", label: { es: "Fósforo", emoji: "🥩" } },
  { value: "potassium", label: { es: "Potasio", emoji: "🍌" } },
  { value: "sodium", label: { es: "Sodio", emoji: "🧂" } },
  { value: "zinc", label: { es: "Zinc", emoji: "🦷" } },
  { value: "copper", label: { es: "Cobre", emoji: "🔴" } },
  { value: "manganese", label: { es: "Manganeso", emoji: "🍍" } },
  { value: "selenium", label: { es: "Selenio", emoji: "🐟" } },
  { value: "iodine", label: { es: "Yodo", emoji: "🍣" } },
  { value: "chromium", label: { es: "Cromo", emoji: "🥦" } },
  { value: "molybdenum", label: { es: "Molibdeno", emoji: "🧪" } },
  { value: "fluoride", label: { es: "Flúor", emoji: "🚰" } },
  { value: "chloride", label: { es: "Cloruro", emoji: "🧪" } },
];

const extra = [{ value: "calories", label: { es: "Calorias", emoji: "⛏️" } }];

export const nutrientsTypesAll = [
  ...nutrientTypes,
  ...vitaminTypes,
  ...mineralTypes,
  ...extra,
];
