export interface Genre {
  id: number;
  name: string;
}

export interface Video {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection?: unknown;
  genres?: Genre[];
  genre_ids?: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  tagline?: string;
  vote_average: number;
  vote_count: number;
}

export interface Dates {
  maximum: string;
  minimum: string;
}

export interface VideoResult {
  dates?: Dates;
  page: number;
  results: Video[];
  total_pages: number;
  total_results: number;
}
