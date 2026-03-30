import { useQuery } from "@tanstack/react-query";
import { getSearchResults } from "lib/api";
import { ApiResponse, Movie } from "types";

export const useSearch = (query: string) => {
  return useQuery<ApiResponse<Movie>>({
    queryKey: ["search", query],
    queryFn: () =>
      getSearchResults({
        query,
        include_adults: "false",
        languages: "en-US",
      }),
    enabled: !!query,
  });
};
