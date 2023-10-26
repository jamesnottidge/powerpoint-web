import React from "react";
import {
  createContext,
  Dispatch,
  useContext,
  useReducer,
  ReactNode,
} from "react";
import dataJson from "./data.json";
import { State, Action } from "./types";

interface StateContextType {
  state: State;
  dispatch: Dispatch<Action>;
}

const StateContext = createContext<StateContextType | null>(null);

const initializer = () => ({
  currentPresentation: null,
  currentSlide: null,
  data: dataJson.data,
});

type Props = {
  children: ReactNode;
  reducer: (state: State, action: Action) => State;
};

const initialState: State = {
  currentPresentation: 1,
  currentSlide: 100,
  data: dataJson.data,
};

export const StateProvider = ({ children, reducer }: Props) => {
  const [state, dispatch]: [State, Dispatch<Action>] = useReducer(
    reducer,
    initialState
  );

  const stateManager = {
    state,
    dispatch,
  };

  return (
    <StateContext.Provider value={stateManager}>
      {children}
    </StateContext.Provider>
  );
};

export const useGlobalState = () => useContext(StateContext);
