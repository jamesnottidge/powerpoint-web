import React, { useState } from "react";
import { useSlide } from "../../controllers/slideReducer";
import { Title } from "./Title";
import { Subtitle } from "./Subtitle";
import { EditTitleInput } from "./EditTitleInput";
import { EditSubtitleInput } from "./EditSubtitleInput";

type Props = {
  key?: number;
  slideId: number;
};

const Slide = ({ key, slideId }: Props) => {
  const [isInEditMode, setIsInEditMode] = useState(false);
  const [titleEdit, setTitleEdit] = useState(false);
  const [subtitleEdit, setSubtitleEdit] = useState(false);
  const { slide, editTitle, editSubtitle } = useSlide(slideId);
  console.log(slide);

  const handleTitleSaveClick = (payload) => {
    setTitleEdit(false);
    editTitle(payload);
  };

  const handleSubtitleSaveClick = (payload) => {
    setSubtitleEdit(false);
    editSubtitle(payload);
  };

  return (
    <div className="flex flex-col justify-center h-full overflow-hidden">
      <div
        className="relative border border-gray-800 rounded-md py-2.5 px-6 w-full h-5/6 flex items-center my-6 flex flex-col"
        style={{ backgroundColor: `${slide.color}` }}
      >
        <div>
          {titleEdit ? (
            <EditTitleInput
              title={slide.title}
              onSaveClick={handleTitleSaveClick}
            />
          ) : (
            <Title
              title={slide.title}
              isInEditMode={isInEditMode}
              setTitleEdit={setTitleEdit}
            />
          )}
        </div>
        <div>
          {subtitleEdit ? (
            <EditSubtitleInput
              subtitle={slide.subtitle}
              onSaveClick={handleSubtitleSaveClick}
            />
          ) : (
            <Subtitle
              subtitle={slide.subtitle}
              isInEditMode={isInEditMode}
              setSubtitleEdit={setSubtitleEdit}
            />
          )}
        </div>
        <div
          className="absolute top-3 right-5 border rounded-md bg-gray-400 p-2 hover:cursor-pointer"
          onClick={() => setIsInEditMode(!isInEditMode)}
        >
          <button>{isInEditMode ? "Cancel" : "Edit"}</button>
        </div>
      </div>
    </div>
  );
};

export default Slide;
