import React from "react";

type Props = {
  subtitle: string;
};

export const Subtitle = ({ subtitle }: Props) => {
  return (
    <div className="border border-dashed border-black-200">{subtitle}</div>
  );
};
