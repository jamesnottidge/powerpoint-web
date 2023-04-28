import { useGlobalState } from "../StateContext";
import { combineReducers, createActionAndReducer } from "../utils";
import { State } from "../types";

const [editTitleAction, editTitleReducer] = createActionAndReducer(
  "slide/editTitle",
  (state: State, payload: string) => {
    const { data, currentPresentation, currentSlide } = state;
    const updatedData = data.map((presentation) => {
      if (presentation.presentationId !== currentPresentation) {
        return presentation;
      }
      return {
        ...presentation,
        slides: presentation.slides.map((slide) => {
          if (slide.slideId !== currentSlide) {
            return slide;
          }
          return {
            ...slide,
            title: payload,
          };
        }),
      };
    });
    return {
      ...state,
      data: updatedData,
    };
  }
);

export const slideReducer = combineReducers(editTitleReducer);

export const useSlide = () => {
  //@ts-ignore
  const { dispatch, state } = useGlobalState();
  const { currentSlide, data } = state;

  return {
    currentSlide: state.currentSlide,
    //@ts-ignore
    editTitle: (slideTitle: string) => dispatch(editTitleAction(slideTitle)),
  };
};
