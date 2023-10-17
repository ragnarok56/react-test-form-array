import React from "react";
import { useFieldArray } from "react-hook-form";
import NestedArray from "./nestedFieldArray";

let renderCount = 0;

export default function Fields({ control, register, setValue, getValues }) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "test"
  });

  renderCount++;

  return (
    <>
      <ul>
        {fields.map((item, index) => {
          return (
            <li key={item.id}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <input type="checkbox" {...register(`test.${index}.enabled`)} />
                <select {...register(`test.${index}.groupType`)}>
                  <option name="Must" value="must">
                    Must
                  </option>
                  <option name="Should" value="should">
                    Should
                  </option>
                  <option name="Not" value="not">
                    Not
                  </option>
                </select>
                <input {...register(`test.${index}.name`)} />
                <button type="button" onClick={() => remove(index)}>
                  X
                </button>
              </div>
              <NestedArray nestIndex={index} {...{ control, register }} />
            </li>
          );
        })}
      </ul>

      <section>
        <button
          type="button"
          onClick={() => {
            append({
              name: "appended group",
              enabled: true,
              groupType: "should"
            });
          }}
        >
          Add Group
        </button>

        <button
          type="button"
          onClick={() => {
            append({
              name: "Enclave Name",
              enabled: true,
              groupType: "should",
              fields: [
                { field: "name", values: "enclave name 1", enabled: true },
                { field: "address", values: "enclave address 1", enabled: true }
              ]
            });
          }}
        >
          Add Enclave Info
        </button>
      </section>

      <span className="counter">Render Count: {renderCount}</span>
    </>
  );
}
