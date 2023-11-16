import * as React from "react";

export interface Props {
  options: string[];
  classContainer?: string;
  classSelect?: string;
}

export default function Select({
  options,
  classContainer,
  classSelect = "bg-light",
}: Props) {
  return (
    <div className={`${classContainer}`}>
      <select
        name="status"
        data-control="select2"
        data-hide-search="true"
        className={`${classSelect} border-0 form-select form-select-sm form-select-white`}
        defaultValue={options[0]}
      >
        {options.map((item) => (
          <option value="Active">{item}</option>
        ))}
      </select>
    </div>
  );
}
