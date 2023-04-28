import React from "react";
import { useSlide } from "../../controllers/slideReducer";
import { Title } from "./Title";
import { Subtitle } from "./Subtitle";

type Props = {
  key?: number;
  slideId: number;
};

const Slide = ({ key, slideId }: Props) => {
  const { slide } = useSlide(slideId);
  console.log(slide);
  return (
    <div className="flex flex-col justify-center h-full overflow-hidden">
      <div
        className="border border-gray-800 rounded-md py-2.5 px-6 w-full h-5/6 flex items-center my-6 flex flex-col"
        style={{ backgroundColor: `${slide.color}` }}
      >
        <Title title={slide.title} />
        <Subtitle subtitle={slide.subtitle} />
      </div>
    </div>
  );
};

export default Slide;
