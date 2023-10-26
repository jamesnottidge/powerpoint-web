import React from "react";

type Props = {
  subtitle: string;
  isInEditMode: boolean;
  setSubtitleEdit: any;
};

export const Subtitle = ({
  subtitle,
  isInEditMode,
  setSubtitleEdit,
}: Props) => {
  return (
    <div
      className="border border-dashed border-black-200"
      onClick={() => {
        if (isInEditMode) {
          setSubtitleEdit(true);
        }
      }}
    >
      {subtitle}
    </div>
  );
};
