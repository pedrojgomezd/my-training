"use client";

import { clientAPI } from "@/utils/clientAPI";
import { Button, Modal, Spinner, TextInput } from "flowbite-react";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useState, useTransition } from "react";
import Select from "react-tailwindcss-select";

export const ModalAddFoodDaily = ({ isShow, onClose, data }) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isFetching, setIsFetching] = useState(false);

  const isMutating = isFetching || isPending;

  const options = useCallback(() => {
    return data.map((item) => ({ value: item.id, label: item.food }));
  }, [data]);

  const { values, handleChange, handleSubmit, setFieldValue, resetForm } =
    useFormik({
      initialValues: {
        food: null,
        quantity: null,
      },
      onSubmit: async (values) => {
        const itemSelect = data.find((i) => i.id === values.food.value);

        const requestData = {
          ...itemSelect,
          quantity: Number(values.quantity),
        };
        setIsFetching(true);

        const response = await clientAPI(
          "user/foods/daily/create",
          JSON.stringify(requestData)
        );
        setIsFetching(false);
        
        resetForm();
        onClose();
        
        startTransition(() => {
          router.refresh();
        });
      },
    });

  return (
    <div>
      <Modal show={isShow} onClose={onClose}>
        <Modal.Header>Adicionar alimento a tu dia</Modal.Header>
        <Modal.Body>
          <div>
            <div className="mb-6">
              <Select
                primaryColor="blue"
                options={options()}
                isSearchable
                value={values.food}
                onChange={(f) => setFieldValue("food", f)}
                isDisabled={isMutating}
              />
            </div>
            <div>
              <TextInput
                id="quantity"
                name="quantity"
                value={values.quantity}
                onChange={handleChange}
                className="w-full"
                addon={"gr"}
                disabled={isMutating}
                autoComplete="off"
              />
            </div>
            <div className="mt-4">
              <Button
                size="xs"
                fullSized
                onClick={() => router.replace("/feeding/create")}
              >
                Agregar alimento
              </Button>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="flex justify-between">
          <Button color="gray" onClick={onClose}>
            Cancelar
          </Button>
          <Button onClick={() => handleSubmit()}>
            {isMutating && (
              <div className="mr-3">
                <Spinner size="sm" light={true} />
              </div>
            )}
            Agregar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
