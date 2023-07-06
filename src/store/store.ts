import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import videosResult from './slices/video.slice';
import { apiVideo } from './services/video';
import selectedOptions from './slices/selectedOptions.slice';

export const store = configureStore({
  reducer: {
    videosResult,
    selectedOptions,
    [apiVideo.reducerPath]: apiVideo.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiVideo.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
