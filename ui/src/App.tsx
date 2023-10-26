import React from "react";
import { useState } from "react";
import { addSyntheticLeadingComment } from "typescript";
import "./App.css";
import { usePresentation } from "./controllers/presentationReducer";
import { useSlide } from "./controllers/slideReducer";
import { useGlobalState } from "./StateContext";
import SlidePreview from "./views/SlidePreview/SlidePreview";
import { SlideView } from "./views/SlideView/SlideView";

function App() {
  //@ts-ignore
  const { state } = useGlobalState();
  console.log(state);

  const { addSlide, removeSlide, selectSlide } = usePresentation();
  const { editSubtitle } = useSlide();

  return (
    <>
      <div className="w-full min-h-screen flex space-x-6">
        <SlidePreview />
        <SlideView placeHolder="" />
      </div>
    </>
  );
}

export default App;
