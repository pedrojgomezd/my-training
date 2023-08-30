import { clientAPI } from "@/utils/clientAPI";
import { Button } from "flowbite-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const FormNewFood = () => {
  const [food, setFood] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleClick = async () => {
    setLoading(true);
    try {
      const data = await clientAPI("/gpt", JSON.stringify({ data: food }));
      setLoading(false);
      router.refresh();
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <div className="mt-8">
      <textarea
        disabled={loading}
        onChange={(e) => setFood(e.target.value)}
        id="message"
        className="mb-4 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Write your thoughts here..."
      ></textarea>
      <Button disabled={loading} onClick={handleClick}>
        Enviar
      </Button>
    </div>
  );
};
