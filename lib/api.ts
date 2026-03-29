import axios, { AxiosRequestConfig } from "axios";
import { endpoints } from "config/constants";
import { ApiResponse, Movie } from "types";

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

const apiCall = async (
  endpoint: string,
  params?: Record<string, any>
): Promise<ApiResponse<Movie>> => {
  const options: AxiosRequestConfig = {
    method: "GET",
    url: endpoint,
    params: params ? params : {},
  };
  try {
    // await new Promise((resolve) => setTimeout(resolve, 5000));
    const res = await api.request<ApiResponse<Movie>>(options);
    return res.data;
  } catch (error) {
    console.error("error: ", error);
    return {
      page: 1,
      results: [],
      total_pages: 0,
      total_results: 0,
    };
  }
};

export const getTrendingMovies = () => apiCall(endpoints.trending);
export const getUpcomingMovies = () => apiCall(endpoints.upcoming);
export const getTopRatedMovies = () => apiCall(endpoints.topRated);

export const IMAGE_500_URL = "https://image.tmdb.org/t/p/w500";
export const IMAGE_342_URL = "https://image.tmdb.org/t/p/w342";
export const IMAGE_185_URL = "https://image.tmdb.org/t/p/w185";

export const image500 = (path?: string | null) => (path ? `${IMAGE_500_URL}${path}` : undefined);
export const image342 = (path?: string | null) => (path ? `${IMAGE_342_URL}${path}` : undefined);
export const image185 = (path?: string | null) => (path ? `${IMAGE_185_URL}${path}` : undefined);
