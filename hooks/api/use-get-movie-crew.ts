import { useQuery } from "@tanstack/react-query";
import { getMovieCredits } from "lib/api";

export function useGetMovieCrew(id: number) {
  const query = useQuery({
    queryKey: ["movie_crew", id],
    enabled: !!id,
    queryFn: () => getMovieCredits(id),
  });

  return query;
}
