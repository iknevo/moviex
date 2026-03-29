import { useQuery } from "@tanstack/react-query";
import { getMovieById } from "lib/api";

export function useGetMovieById(id: number) {
  const query = useQuery({
    queryKey: ["movie", id],
    enabled: !!id,
    queryFn: () => getMovieById(id),
  });

  return query;
}
