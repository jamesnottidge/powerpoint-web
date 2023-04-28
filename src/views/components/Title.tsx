import React from "react";

type Props = {
  title: string;
  isInEditMode: boolean;
  setTitleEdit: any;
};

export const Title = ({ title, isInEditMode, setTitleEdit }: Props) => {
  return (
    <div
      className="border border-dashed border-black-200"
      onClick={() => {
        if (isInEditMode) {
          setTitleEdit(true);
        }
      }}
    >
      {title}
    </div>
  );
};
