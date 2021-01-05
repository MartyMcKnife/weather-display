import React, { ReactElement } from "react";
import { useState } from "react";

interface Props {
  setCity: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchBar({ setCity }: Props): ReactElement {
  const [value, setValue] = useState("");

  const handlePress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setCity(value);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <div className="flex justify-end m-4">
      <div className="min-w-max">
        <i className="fas fa-search absolute p-2 pointer-events-none"></i>
        <input
          type="text"
          onKeyPress={handlePress}
          onChange={handleChange}
          className="w-4 h-4 p-4 rounded-md transition-all duration-900 ease-in-out cursor-pointer focus:w-64 focus:cursor-text focus:pl-8"
        />
      </div>
    </div>
  );
}
