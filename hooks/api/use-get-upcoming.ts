import { useQuery } from "@tanstack/react-query";
import { getUpcomingMovies } from "lib/api";

export function useGetUpcoming() {
  const query = useQuery({
    queryKey: ["up_coming"],
    queryFn: getUpcomingMovies,
  });

  return query;
}
