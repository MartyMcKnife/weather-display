import React, { ReactElement } from "react";

interface Props {
  setCelsius: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function TemperatureButtons({
  setCelsius,
}: Props): ReactElement {
  return (
    <div className="flex justify-evenly mt-36 sm:mt-12">
      <button
        name="celsius"
        className="bg-gray-100 min-w-max px-4 rounded-md shadow-md opacity-60 mr-4 sm:mr-1"
        onClick={() => setCelsius(true)}
      >
        Celsius
      </button>
      <button
        name="farenheit"
        className="bg-gray-100 min-w-max px-4 rounded-md shadow-md opacity-60"
        onClick={() => setCelsius(false)}
      >
        Farenheit
      </button>
    </div>
  );
}
