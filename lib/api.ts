import axios from "axios";
import { endpoints } from "config/constants";
import {
  ApiResponse,
  CreditsResponse,
  Movie,
  MovieDetails,
  PersonDetails,
  PersonMovies,
} from "types";

const TMDB_API_KEY = "4799f41c57763fc168903b60ee62450a";

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: TMDB_API_KEY,
  },
  headers: {
    "Content-Type": "application/json",
  },
});

const apiCall = async <T>(endpoint: string, params?: Record<string, any>): Promise<T> => {
  try {
    const res = await api.get<T>(endpoint, {
      params: params ?? {},
    });

    return res.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

export const getTrendingMovies = () => apiCall<ApiResponse<Movie>>(endpoints.trending);
export const getUpcomingMovies = () => apiCall<ApiResponse<Movie>>(endpoints.upcoming);
export const getTopRatedMovies = () => apiCall<ApiResponse<Movie>>(endpoints.topRated);
export const getMovieById = (id: number) => apiCall<MovieDetails>(`${endpoints.movie}/${id}`);
export const getMovieCredits = (id: number) =>
  apiCall<CreditsResponse>(`${endpoints.movie}/${id}/credits`);
export const getMovieSimilars = (id: number) =>
  apiCall<ApiResponse<Movie>>(`${endpoints.movie}/${id}/similar`);

export const getPersonDetails = (id: number) => apiCall<PersonDetails>(`${endpoints.person}/${id}`);
export const getPersonMovies = (id: number) =>
  apiCall<PersonMovies>(`${endpoints.person}/${id}/movie_credits`);

export const getSearchResults = (params: Record<string, any>) =>
  apiCall<ApiResponse<Movie>>(`${endpoints.search}`, params);

export const IMAGE_500_URL = "https://image.tmdb.org/t/p/w500";
export const IMAGE_342_URL = "https://image.tmdb.org/t/p/w342";
export const IMAGE_185_URL = "https://image.tmdb.org/t/p/w185";

export const image500 = (path?: string | null) => (path ? `${IMAGE_500_URL}${path}` : undefined);
export const image342 = (path?: string | null) => (path ? `${IMAGE_342_URL}${path}` : undefined);
export const image185 = (path?: string | null) => (path ? `${IMAGE_185_URL}${path}` : undefined);
