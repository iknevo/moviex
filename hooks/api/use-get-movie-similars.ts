import { useQuery } from "@tanstack/react-query";
import { getMovieSimilars } from "lib/api";

export function useGetMovieSimilars(id: number) {
  const query = useQuery({
    queryKey: ["similar", id],
    enabled: !!id,
    queryFn: () => getMovieSimilars(id),
  });

  return query;
}
