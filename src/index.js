import React from "react";
import { useForm } from "react-hook-form";
import FieldArray from "./fieldArray";
import ReactDOM from "react-dom";

import "./styles.css";

const defaultValues = {
  test: [
    {
      name: "default group name",
      enabled: true,
      fields: [
        { field: "name", values: "name 1", enabled: true },
        { field: "address", values: "address 1", enabled: true }
      ]
    }
  ]
};

function App() {
  const {
    control,
    register,
    handleSubmit,
    getValues,
    errors,
    reset,
    setValue
  } = useForm({
    defaultValues
  });
  const onSubmit = (data) => console.log("data", data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Array of Array Fields</h1>
      <p>
        The following example demonstrate the ability of building nested array
        fields.
      </p>

      <FieldArray
        {...{ control, register, defaultValues, getValues, setValue, errors }}
      />

      <button type="button" onClick={() => reset(defaultValues)}>
        Reset
      </button>

      <input type="submit" />
    </form>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
