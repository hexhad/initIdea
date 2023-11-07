import { batchedSubscribe } from 'redux-batched-subscribe'
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dummyReducer from "./dummy/dummySlice";
import logger from "redux-logger";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from 'redux-persist';
import { mmkvStorage } from '../utils/mmkvStorage';


const persistConfig = {
  key: 'root',
  storage:mmkvStorage,
}

const rootReducer = combineReducers({
  dummy: dummyReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const batchedSubscribeCB = () => {
  console.log('This will trigger before every state update');
};

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),logger],
});
export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
