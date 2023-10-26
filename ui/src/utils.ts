import { Dispatch } from "react";
import { Action, State } from "./types";

export const createAction = (type: string) => {
  function actionCreator(payload: any) {
    return { type, payload };
  }
  actionCreator.type = type;
  actionCreator.toString = () => String(type);
  actionCreator.match = (action: Action) => action.type === type;
  return actionCreator;
};

export const createReducer =
  (actionCreator: any, reducerFn: (state: State, action: Action) => State) =>
  (state: State, action: Action) => {
    if (!actionCreator.match(action)) return state;
    else return reducerFn(state, action.payload);
  };

export const createActionAndReducer = (
  actionType: string,
  reducerFn: (state: State, payload: any) => State
) => {
  const actionCreator = createAction(actionType);
  const reducer = createReducer(actionCreator, reducerFn);
  return [actionCreator, reducer];
};

// export const createActionAndReducer = (
//   actionType: string,
//   reducerFn: (state: State, payload: any) => State
// ) => {
//   const actionCreator = (payload: any) => ({ type: actionType, payload });
//   actionCreator.type = actionType;
//   actionCreator.toString = () => String(actionType);
//   actionCreator.match = (action: Action) => action.type === actionType;
//   const reducer = (state: State, action: Action) => {
//     if (!actionCreator.match(action)) return state;
//     else return reducerFn(state, action.payload);
//   };
//   return [actionCreator, reducer];
// };

export const combineReducers =
  (...reducers: any) =>
  (state: any, action: Action) => {
    for (const reducer of reducers) {
      state = reducer(state, action);
    }
    return state;
  };

export const createPayload = (actualPayloadObject: any, id: number) => ({
  id,
  item: actualPayloadObject,
});

export const createDispatchFunctions = (
  dispatch: Dispatch<Action>,
  actionCreatorsObject: any
) => {
  const keys = Object.keys(actionCreatorsObject);
  const dispatchers = {};
  for (const key of keys) {
    const actionCreator = actionCreatorsObject[key];
    const dispatcher = (payload: any) => dispatch(actionCreator(payload));
    // @ts-ignore
    dispatchers[key] = dispatcher;
  }
  return dispatchers;
};
