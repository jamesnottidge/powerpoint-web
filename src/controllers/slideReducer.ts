import { useGlobalState } from "../StateContext";
import { combineReducers, createActionAndReducer } from "../utils.js";
import { Slide, State } from "../types";

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
      data: updatedData,
    };
  }
);

// const { dispatch, state } = useGlobalState();
// dispatch(
//   addSlideAction({
//     slideId: 102,
//     title: "First slide",
//     subtitle: "a sub",
//     color: "#000000",
//     presentationId: 1,
//   })
// );

// console.log(state);

export const slideReducer = combineReducers(addSlideReducer);

export const useSlide = () => {
  // @ts-ignore
  const { dispatch, state } = useGlobalState();
  const { currentSlide, data } = state;

  return {
    // @ts-ignore
    addSlide: (newSlide: Slide) => dispatch(addSlideAction(newSlide)),
  };
};
