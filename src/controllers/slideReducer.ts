import { useGlobalState } from "../StateContext";
import { combineReducers, createActionAndReducer } from "../utils";
import { Presentation, State } from "../types";

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

const [editSubtitleAction, editSubtitleReducer] = createActionAndReducer(
  "slide/editSubtitle",
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
            subtitle: payload,
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

export const slideReducer = combineReducers(
  editTitleReducer,
  editSubtitleReducer
);

export const useSlide = (id?: number) => {
  //@ts-ignore
  const { dispatch, state } = useGlobalState();
  const {
    currentPresentation,
    currentSlide,
    data,
  }: {
    currentPresentation: number;
    currentSlide: number;
    data: Presentation[];
  } = state;

  const presentation = data.filter(
    (presentation) => presentation.presentationId === currentPresentation
  )[0];

  const slide = presentation.slides.filter((slide) => slide.slideId === id)[0];

  return {
    currentSlide: currentSlide,
    slide: slide,
    //@ts-ignore
    editTitle: (slideTitle: string) => dispatch(editTitleAction(slideTitle)),

    editSubtitle: (
      slideSubtitle: string
      //@ts-ignore
    ) => dispatch(editSubtitleAction(slideSubtitle)),
  };
};
