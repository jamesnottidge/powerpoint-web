import React from "react";
import Slide from "../components/Slide";
import { usePresentation } from "../../controllers/presentationReducer";

type Props = {
  placeHolder: string;
};

export const SlideView = (props: Props) => {
  const { currentSlide, presentation } = usePresentation();
  return (
    <div className="w-[80%] border border-gray-800 min-h-screen py-10 px-4">
      {presentation.slides.map((slide) => {
        if (slide.slideId === currentSlide) {
          return <Slide slideId={currentSlide} />;
        }
      })}
    </div>
  );
};
