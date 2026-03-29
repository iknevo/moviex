import { useQuery } from "@tanstack/react-query";
import { getTrendingMovies } from "lib/api";

export function useGetTrending() {
  const query = useQuery({
    queryKey: ["trending"],
    queryFn: getTrendingMovies,
  });

  return query;
}
