import React from "react";
import { useSlide } from "../../controllers/slideReducer";
import { Title } from "./Title";

type Props = {
  key?: number;
  slideId: number;
};

const Slide = ({ key, slideId }: Props) => {
  const { slide } = useSlide(slideId);
  console.log(slide);
  return (
    <div>
      <Title title={slide.title} />
    </div>
  );
};

export default Slide;
