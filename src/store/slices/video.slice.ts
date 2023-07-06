/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Video } from '../../utils/types';
import { apiVideo } from '../services/video';

export interface VdeoState {
  videos: Video[];
  page: number;
  total_pages: number;
  total_results: number;
}

const initialState: VdeoState = {
  videos: [],
  page: 0,
  total_pages: 0,
  total_results: 0,
};

export const videoSlice = createSlice({
  name: 'video',
  initialState,
  reducers: {
    getVideos: (state, action: PayloadAction<Video[]>) => {
      state.videos = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(apiVideo.endpoints.getVideos.matchFulfilled, (state, { payload }) => {
      state.videos = payload.results;
      state.page = payload.page;
      state.total_pages = payload.total_pages;
      state.total_results = payload.total_results;
    });
  },
});

export const { getVideos } = videoSlice.actions;

export default videoSlice.reducer;
