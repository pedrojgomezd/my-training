"use client";
import { Button, Card, Label, Spinner, TextInput, Toast } from "flowbite-react";
import { useEffect, useState } from "react";
import { TItemFormsFood, itemFormsFoods } from "./inputsFormFood";
import { ModalAddItemForm } from "./ModaladdItemForm";
import Select from "react-tailwindcss-select";
import { typesFood } from "@/utils/typesFood";
import { tranformOpticonWithi18b } from "@/utils/tranformForSelecti18n";
import { useFormik } from "formik";
import { TrashIcon } from "@/components/icons";
import { clientAPI } from "@/utils/clientAPI";
import { useRouter } from "next/navigation";

export const CreateFeddingPageComponent = () => {
  const [itemsForm, setItemForm] = useState<TItemFormsFood[]>(itemFormsFoods);
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [messagem, setMessagem] = useState(false);
  const [loadingModal, setLoadinModal] = useState(true);
  const route = useRouter();

  useEffect(() => {
    setTimeout(() => setMessagem(false), 3000);
  }, [messagem]);

  useEffect(() => {
    setLoadinModal(false);
  }, []);

  const { handleSubmit, values, handleChange, setFieldValue, resetForm } =
    useFormik({
      initialValues: {
        tags: [],
        food: "",
        portion: 100,
        calories: "",
        protein: "",
      },
      onSubmit: async (values) => {
        setLoading(true);
        const { tags, ...data } = values;

        const tagsTranform = tags.map((t) => t.value);

        try {
          const response = await clientAPI(
            "/foods/create",
            JSON.stringify({ tags: tagsTranform, ...data })
          );
          resetForm();
          setItemForm(itemFormsFoods);
          setLoading(false);
          setMessagem(true);
          route.back();
        } catch (error) {
          setLoading(false);
        }
      },
    });

  const handleAddItemForm = (item: any) => {
    setItemForm((old) => [
      ...old,
      {
        name: item.value,
        type: "number",
        id: item,
        label: item.label,
        placeholder: "100",
        required: true,
        isRemovable: true,
        isMesurable: true,
        step: "0.01",
      },
    ]);
  };

  const handleRemoveItemForm = (value: string) => {
    const result = itemsForm.filter((i) => i.name !== value);
    setItemForm(result);
  };

  const handleOpenAddItemModal = () => setModal((old) => !old);

  return (
    <>
      <div className="p-2">
        <Card>
          <h2>Adicionar alimento</h2>
          <form onSubmit={handleSubmit}>
            <Select
              onChange={(v) => setFieldValue("tags", v)}
              value={values.tags}
              primaryColor="blue"
              isMultiple={true}
              isSearchable
              options={tranformOpticonWithi18b(typesFood)}
              searchInputPlaceholder="Buscar..."
            />
            {itemsForm.map(
              ({ name, label, isMesurable, isRemovable, icon, ...item }) => (
                <div key={name} className="mt-4">
                  <div className="mb-2 block">
                    <Label htmlFor={name} value={label} />
                  </div>
                  <div className="flex gap-2">
                    <TextInput
                      id={name}
                      name={name}
                      value={values[name]}
                      onChange={handleChange}
                      className="w-full"
                      addon={isMesurable && "gr"}
                      disabled={loading}
                      {...item}
                    />
                    {isRemovable && (
                      <Button
                        onClick={() => handleRemoveItemForm(name)}
                        color="light"
                        size="sm"
                      >
                        <TrashIcon className="h-6 w-6 text-red-600" />
                      </Button>
                    )}
                  </div>
                </div>
              )
            )}

            <div className="mt-4">
              <Button fullSized color="gray" onClick={handleOpenAddItemModal}>
                Agregar nutriente
              </Button>
            </div>

            <div className="mt-4">
              <Button fullSized type="submit" disabled={loading}>
                {loading && (
                  <div className="mr-3">
                    <Spinner size="sm" light={true} />
                  </div>
                )}
                Guardar
              </Button>
            </div>
          </form>
        </Card>
        {loadingModal || (
          <ModalAddItemForm
            isOpen={modal}
            onClose={handleOpenAddItemModal}
            handleAddItemForm={handleAddItemForm}
          />
        )}
      </div>
      {messagem && (
        <div className="absolute top-16 right-0">
          <Toast>
            <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
              <div className="h-5 w-5 bg-green-300" />
            </div>
            <div className="ml-3 text-sm font-normal">
              Se agrego el alimento corectament.
            </div>
            <Toast.Toggle />
          </Toast>
        </div>
      )}
    </>
  );
};
