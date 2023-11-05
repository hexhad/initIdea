// import { batchedSubscribe } from 'redux-batched-subscribe'

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dummyReducer from "./dummy/dummySlice";
import logger from "redux-logger";

const reducers = combineReducers({
  dummy: dummyReducer
})

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(),logger],
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
