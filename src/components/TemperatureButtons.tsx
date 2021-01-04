import React, { ReactElement } from "react";

interface Props {
  setCelsius: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function TemperatureButtons({
  setCelsius,
}: Props): ReactElement {
  return (
    <div>
      <button name="celsius" onClick={() => setCelsius(true)}>
        Celsius
      </button>
      <button name="farenheit" onClick={() => setCelsius(false)}>
        Farenheit
      </button>
    </div>
  );
}
