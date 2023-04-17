import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import galleryReducer from '@/features/gallery/gallerySlice';

export function makeStore() {
  return configureStore({
    reducer: { gallery: galleryReducer },
  });
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
