import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from './axiosBaseQuery';
import { VideoResult } from '../../utils/types';

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
        providesTags: [{ type: 'videos', id: 'List' }],
      }),
      mutation: build.mutation({
        query: () => ({ url: '/search', method: 'post' }),
      }),
    };
  },
});

export const { useGetVideosQuery, endpoints } = apiVideo;
