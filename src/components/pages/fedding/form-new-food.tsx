import { clientAPI } from "@/utils/clientAPI";
import { Button, Select } from "flowbite-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const FormNewFood = () => {
  const [data, setData] = useState("");
  const [food, setFood] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleClick = async () => {
    setLoading(true);
    try {
      const response = await clientAPI("/gpt", JSON.stringify({ data, food }));
      setLoading(false);
      setData("")
      setFood("")
      router.refresh();
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <div className="mt-8 flex gap-2 flex-col bg-slate-50 p-2">
      <p>Agrega una comida</p>
      <Select onChange={(e) => setFood(e.target.value)}>
        <option disabled>Selecciona comida</option>
        <option>Desayuno</option>
        <option>Almuerzo</option>
        <option>Snack</option>
        <option>Cena</option>
      </Select>
      <textarea
        disabled={loading}
        onChange={(e) => setData(e.target.value)}
        id="message"
        className="mb-4 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Dime que comiste?"
      ></textarea>
      <Button disabled={loading} onClick={handleClick}>
        Enviar
      </Button>
    </div>
  );
};
