import React from "react";
import { useState } from "react";

type Props = {
  onSaveClick: (astring: string) => void;
  description: string;
};

export const EditDescriptionInput = ({ onSaveClick, description }: Props) => {
  const [value, setValue] = useState(description);

  return (
    <div>
      <div className="border-2 border-dot">
        <textarea value={value} onChange={(e) => setValue(e.target.value)} />
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
