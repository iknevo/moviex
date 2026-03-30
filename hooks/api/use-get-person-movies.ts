import { useQuery } from "@tanstack/react-query";
import { getPersonMovies } from "lib/api";

export function useGetPersonMovies(id: number) {
  const query = useQuery({
    queryKey: ["person_movies", id],
    enabled: !!id,
    queryFn: () => getPersonMovies(id),
  });

  return query;
}
