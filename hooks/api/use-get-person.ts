import { useQuery } from "@tanstack/react-query";
import { getPersonDetails } from "lib/api";

export function useGetPerson(id: number) {
  const query = useQuery({
    queryKey: ["person", id],
    enabled: !!id,
    queryFn: () => getPersonDetails(id),
  });

  return query;
}
