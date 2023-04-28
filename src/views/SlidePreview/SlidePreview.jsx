import React from "react";
import { usePresentation } from "../../controllers/presentationReducer";
import { useSlide } from "../../controllers/slideReducer";
import Slide from "../components/Slide";
import { randomNumber } from "../viewUtility";

const SlidePreview = () => {
  const { presentation, addSlide, selectSlide, currentSlide } =
    usePresentation();
  return (
    <div className="w-[20%] border border-gray-800 min-h-screen overflow-hidden">
      <aside className="bg-gray-100 w-full min-h-screen p-6">
        <div className="border border-gray-200 rounded-md py-2.5 px-6 w-full flex items-center">
          <i className="fas fa-file-powerpoint fa-lg fa-fw mr-2 text-black"></i>
          <span className="text-xl">Presentation</span>
        </div>

        <div className="my-3 w-full">
          <span>Slide 1 of {presentation.slides.length}</span>
        </div>

        {presentation.slides.map((slide) => (
          <div
            className={`${
              slide.slideId === currentSlide
                ? "border-4 border-blue-400"
                : "border border-gray-800"
            }  rounded-md py-2.5 px-6 w-full h-48 flex items-center my-6`}
            onClick={() => selectSlide(slide.slideId)}
          >
            <Slide key={slide.slideId} slideId={slide.slideId} />
          </div>
        ))}

        <button className="border border-gray-800 bg-gray-900 rounded-md py-2.5 px-6 w-full flex items-center justify-center">
          <i className="fas fa-plus fa-lg fa-fw mr-2 text-white"></i>
          <span
            className="text-xl text-white"
            onClick={() => {
              addSlide({
                slideId: randomNumber(),
                title: randomNumber().toString(),
                subtitle: "a sub",
                color: "#000045",
                presentationId: 1,
              });
            }}
          >
            Add New Slide
          </span>
        </button>
      </aside>
    </div>
  );
};

export default SlidePreview;
