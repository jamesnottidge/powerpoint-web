import React from "react";

type Props = {
  title: string;
};

export const Title = ({ title }: Props) => {
  return <div className="border border-dashed border-black-200">{title}</div>;
};
