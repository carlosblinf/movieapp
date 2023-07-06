import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from './axiosBaseQuery';
import { Video, VideoResult } from '../../utils/types';

export const apiVideo = createApi({
  reducerPath: 'apiVideo',
  baseQuery: axiosBaseQuery({
    transformResponse: (response) => response,
  }),
  tagTypes: ['videos'],
  endpoints(build) {
    return {
      getVideos: build.query<VideoResult, string>({
        query: (path) => ({ url: `/${path}` }),
        providesTags: (path) => [{ type: 'videos', path }],
      }),
      getVideo: build.query<Video, string>({
        query: (id) => ({ url: `/${id}?language=en-US'` }),
      }),
      mutation: build.mutation({
        query: () => ({ url: '/search', method: 'post' }),
      }),
    };
  },
});

export const { useGetVideosQuery, useGetVideoQuery, endpoints } = apiVideo;
