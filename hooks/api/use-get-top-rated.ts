import { useQuery } from "@tanstack/react-query";
import { getTopRatedMovies } from "lib/api";

export function useGetTopRated() {
  const query = useQuery({
    queryKey: ["top_rated"],
    queryFn: getTopRatedMovies,
  });

  return query;
}
