"use clietn";

import { tranformOpticonWithi18b } from "@/utils/tranformForSelecti18n";
import { Button, Label, Modal } from "flowbite-react";
import { useState } from "react";
import Select from "react-tailwindcss-select";

import { nutrientsTypesAll } from "./../../../utils/typesFood";

export const ModalAddItemForm = ({ isOpen, onClose, handleAddItemForm }) => {
  const [value, setValue] = useState(null);

  const handleSave = () => {
    handleAddItemForm(value);
    onClose();
    setValue("");
  };

  return (
    <Modal show={isOpen} onClose={onClose}>
      <Modal.Header>Agragar nutriente</Modal.Header>

      <Modal.Body>
        <div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="input-name-nutrient" value="Nombre nutriente" />
            </div>
            <Select
            isSearchable
              primaryColor="blue"
              value={value}
              onChange={(v) => setValue(v)}
              options={tranformOpticonWithi18b(nutrientsTypesAll)}
            />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="flex justify-between">
        <Button color="gray" onClick={onClose}>
          Cancelar
        </Button>
        <Button onClick={handleSave}>Agregar</Button>
      </Modal.Footer>
    </Modal>
  );
};
