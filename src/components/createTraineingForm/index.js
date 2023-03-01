"use client";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useFormik } from "formik";
import { useState } from "react";

const itemForm = [
  "name",
  "cover",
  "images",
  "videos",
  "description",
  "regions",
];

export const CreateTrainingForm = () => {
  
  const [loading, setLoading] = useState(false)

  const {handleSubmit, values, handleChange, resetForm} = useFormik({
    initialValues: {
      name: "",
      description: "",
      cover: "",
      videos: "",
      images: "",
      regions: "",
    },
    onSubmit: async (values) => {
      setLoading(true)
      try{

        const response = await fetch(`${process.env.NEXT_PUBLIC_API}/api/trainings/create`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(values)
        })
        resetForm()
        setLoading(false)

      }catch {
        setLoading(false)
      }
      console.log(response.json())
    }
  });

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      {itemForm.map((item) => (
        <div key={item}>
          <div className="mb-2 block">
            <Label htmlFor={item} value={item.toLocaleUpperCase()} />
          </div>
          <TextInput autoComplete="off" id={item} type="text" placeholder={item.toUpperCase()} onChange={handleChange} value={values[item]} />
        </div>
      ))}
      <Button type="submit" disabled={loading}>Save</Button>
    </form>
  );
};
