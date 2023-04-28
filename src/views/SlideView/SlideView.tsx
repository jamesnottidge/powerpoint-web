import React from "react";
import Slide from "../components/Slide";
import { usePresentation } from "../../controllers/presentationReducer";

type Props = {
  placeHolder: string;
};

export const SlideView = (props: Props) => {
  const { currentSlide } = usePresentation();
  return (
    <div className="w-[80%] border border-gray-800 min-h-screen">
      <Slide slideId={currentSlide} />
    </div>
  );
};
