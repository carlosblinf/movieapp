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
  video: Video;
}

const initialState: VdeoState = {
  videos: [],
  page: 0,
  total_pages: 0,
  total_results: 0,
  video: {
    adult: false,
    backdrop_path: '',
    id: 0,
    original_language: '',
    original_title: '',
    overview: '',
    popularity: 0,
    poster_path: '',
    release_date: '',
    title: '',
    video: false,
    vote_average: 0,
    vote_count: 0,
  },
};

export const videoSlice = createSlice({
  name: 'video',
  initialState,
  reducers: {
    getVideos: (state, action: PayloadAction<Video[]>) => {
      state.videos = action.payload;
    },
    getVideo: (state, action: PayloadAction<Video>) => {
      state.video = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(apiVideo.endpoints.getVideos.matchFulfilled, (state, { payload }) => {
      state.videos = payload.results;
      state.page = payload.page;
      state.total_pages = payload.total_pages;
      state.total_results = payload.total_results;
    });
    builder.addMatcher(apiVideo.endpoints.getVideo.matchFulfilled, (state, { payload }) => {
      state.video = payload;
    });
  },
});

export const { getVideos } = videoSlice.actions;

export default videoSlice.reducer;
