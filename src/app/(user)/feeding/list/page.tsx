import { ListFeddingPageComponent } from "@/components/pages/fedding/ListFeddingPageComponent";
import { clientAPI } from "@/utils/clientAPI";

const getFoods = async () => {
  const data = await clientAPI("foods");
  return data.json();
};

export default async function FeedingCreatePage() {
  const items = await getFoods();
  return (
    <main>
      <ListFeddingPageComponent items={items} />
    </main>
  );
}
