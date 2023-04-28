import React from "react";
import { useState } from "react";

type Props = {
  onSaveClick: (astring: string) => void;
  subtitle: string;
};

export const EditSubtitleInput = ({ onSaveClick, subtitle }: Props) => {
  const [value, setValue] = useState(subtitle);

  return (
    <div>
      <div className="border-2 border-dot">
        <input value={value} onChange={(e) => setValue(e.target.value)} />
      </div>

      <div>
        <button
          className="border border-gray-800 p-1 rounded-md flex items-center justify-center"
          onClick={(e) => {
            onSaveClick(value);
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
};
