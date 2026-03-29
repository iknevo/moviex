export interface Movie {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface ApiResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

export interface Cast {
  id: number;
  name: string;
  original_name: string;
  character: string;
  profile_path: string | null;

  adult: boolean;
  gender: number;
  known_for_department: string;
  popularity: number;

  cast_id: number;
  credit_id: string;
  order: number;
}

export interface Crew {
  id: number;
  name: string;
  original_name: string;

  department: string;
  job: string;

  adult: boolean;
  gender: number;
  known_for_department: string;
  popularity: number;

  profile_path: string | null;
  credit_id: string;
}

export interface CreditsResponse {
  id: number;
  cast: Cast[];
  crew: Crew[];
}

export interface Genre {
  id: number;
  name: string;
}

export interface ProductionCompany {
  id: number;
  name: string;
  logo_path: string | null;
  origin_country: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface Collection {
  id: number;
  name: string;
  poster_path: string | null;
  backdrop_path: string | null;
}

export interface MovieDetails {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: Collection | null;

  budget: number;
  genres: Genre[];

  homepage: string | null;
  id: number;
  imdb_id: string | null;

  origin_country: string[];
  original_language: string;
  original_title: string;

  overview: string;
  popularity: number;

  poster_path: string | null;

  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];

  release_date: string;
  revenue: number;
  runtime: number | null;

  spoken_languages: SpokenLanguage[];

  status: string;
  tagline: string | null;

  title: string;
  video: boolean;

  vote_average: number;
  vote_count: number;
}
