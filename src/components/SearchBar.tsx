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
    <div>
      <input type="text" onKeyPress={handlePress} onChange={handleChange} />
    </div>
  );
}
