import React from "react";

type Props = {
  description: string;
  isInEditMode: boolean;
  setDescriptionEdit: any;
};

export const Description = ({
  description,
  isInEditMode,
  setDescriptionEdit,
}: Props) => {
  return (
    <div
      className="border border-dashed border-black-200"
      onClick={() => {
        if (isInEditMode) {
          setDescriptionEdit(true);
        }
      }}
    >
      {description}
    </div>
  );
};
