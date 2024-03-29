import { useGlobalState } from "../StateContext";
import { combineReducers, createActionAndReducer } from "../utils.js";
import { Presentation, Slide, State } from "../types";

const [addSlideAction, addSlideReducer] = createActionAndReducer(
  "presentation/addSlideAction",
  (state: State, payload: Slide) => {
    const { data, currentPresentation } = state;

    const updatedData = data.map((presentation) => {
      if (presentation.presentationId !== currentPresentation) {
        return presentation;
      }
      return {
        ...presentation,
        slides: presentation.slides.concat([payload]),
      };
    });

    return {
      ...state,
      currentSlide: payload.slideId,
      data: updatedData,
    };
  }
);

const [removeSlideAction, removeSlideReducer] = createActionAndReducer(
  "presentation/removeSlideAction",
  (state: State, payload: number) => {
    const { data, currentPresentation } = state;

    const updatedData = data.map((presentation) => {
      if (presentation.presentationId !== currentPresentation) {
        return presentation;
      }
      return {
        ...presentation,
        slides: presentation.slides.filter(
          (slide) => slide.slideId !== payload
        ),
      };
    });
    return {
      ...state,
      data: updatedData,
    };
  }
);

const [selectSlideAction, selectSlideReducer] = createActionAndReducer(
  "presentation/selectSlideAction",
  (state: State, payload: number) => {
    return {
      ...state,
      currentSlide: payload,
    };
  }
);

export const presentationReducer = combineReducers(
  addSlideReducer,
  removeSlideReducer,
  selectSlideReducer
);

export const usePresentation = () => {
  // @ts-ignore
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

  return {
    currentSlide: currentSlide,
    currentPresentation: currentPresentation,
    presentation: data.filter(
      (presentation) =>
        presentation.presentationId === state.currentPresentation
    )[0],
    // @ts-ignore
    addSlide: (newSlide: Slide) => dispatch(addSlideAction(newSlide)),
    // @ts-ignore
    removeSlide: (slideId: number) => dispatch(removeSlideAction(slideId)),
    // @ts-ignore
    selectSlide: (slideId: number) => dispatch(selectSlideAction(slideId)),
  };
};
