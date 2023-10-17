import React from "react";
import { useFieldArray } from "react-hook-form";

export default ({ nestIndex, control, register }) => {
  const { fields, remove, append } = useFieldArray({
    control,
    name: `test.${nestIndex}.fields`
  });

  return (
    <div>
      {fields.map((item, k) => {
        return (
          <div key={item.id} style={{ marginLeft: 20, display: "flex" }}>
            <input
              {...register(`test.${nestIndex}.fields.${k}.enabled`)}
              type="checkbox"
            />
            <label style={{ flex: 10 }}>
              {item.field}
              <input
                {...register(`test.${nestIndex}.fields.${k}.values`, {
                  required: true
                })}
                style={{ marginRight: "25px" }}
              />
            </label>

            <button
              type="button"
              style={{ marginTop: "30px" }}
              onClick={() => remove(k)}
            >
              X
            </button>
          </div>
        );
      })}

      <button
        type="button"
        onClick={() =>
          append({
            field: "name",
            values: "",
            enabled: true
          })
        }
      >
        Add 'name' field
      </button>
      <button
        type="button"
        onClick={() =>
          append({
            field: "address",
            values: "",
            enabled: true
          })
        }
      >
        Add 'address' field
      </button>

      <hr />
    </div>
  );
};
