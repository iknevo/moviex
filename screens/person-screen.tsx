import { RouteProp, useRoute } from "@react-navigation/native";
import Loading from "components/loading";
import MovieList from "components/movie-list";
import { useGetPerson } from "hooks/api/use-get-person";
import { useNavigate } from "hooks/use-navigate";
import { useState } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "theme";
import { RootStackParamList } from "navigation/app-navigation";
import { image342 } from "lib/api";
import { AVATAR_FALLBACK_URI } from "config/constants";
import { useGetPersonMovies } from "hooks/api/use-get-person-movies";

type MovieRouteProp = RouteProp<RootStackParamList, "Person">;

export default function PersonScreen() {
  const {
    params: { id },
  } = useRoute<MovieRouteProp>();

  const [isFav, setIsFav] = useState(false);

  const { data: person, isLoading: isLoadingPerson } = useGetPerson(id);
  const { data: personMovies, isLoading: isLoadingPersonMovies } = useGetPersonMovies(id);
  const { goBack } = useNavigate();
  const loading = isLoadingPerson || isLoadingPersonMovies;

  const personMoviesList = personMovies?.cast ?? [];

  return (
    <ScrollView className="flex-1 bg-neutral-900" contentContainerStyle={{ paddingBottom: 20 }}>
      <SafeAreaView className="mt-4 w-full flex-row items-center justify-between px-4">
        <Pressable className="rounded-xl p-1" style={styles.background} onPress={() => goBack()}>
          <ChevronLeftIcon size={28} strokeWidth={2.5} color="#ffffff" />
        </Pressable>

        <Pressable onPress={() => setIsFav((prev) => !prev)}>
          <HeartIcon size={35} color={isFav ? "#ff0000" : "#cccccc"} />
        </Pressable>
      </SafeAreaView>
      {loading ? (
        <Loading />
      ) : (
        <View>
          <View
            className="flex-row justify-center"
            style={{
              shadowColor: "gray",
              shadowRadius: 40,
              shadowOffset: { width: 0, height: 5 },
              shadowOpacity: 1,
            }}>
            <View className="h-80 w-80 items-center overflow-hidden rounded-full border-2 border-neutral-500">
              <Image
                source={{ uri: image342(person?.profile_path || AVATAR_FALLBACK_URI) }}
                style={{ height: "100%", width: "100%" }}
              />
            </View>
          </View>
          <View className="mt-6">
            <Text className="text-center text-3xl font-bold text-white">{person?.name}</Text>
            {person?.place_of_birth && (
              <Text className="text-center text-base font-bold text-neutral-500">
                {person?.place_of_birth}
              </Text>
            )}
          </View>
          <View className="mx-3 mt-6 border-separate flex-row items-center justify-between rounded-full bg-neutral-700 p-4">
            <View className="items-center px-2">
              <Text className="font-semibold text-white">Gender</Text>
              <Text className="text-sm text-neutral-300">
                {person?.gender === 1 ? "Female" : "Male"}
              </Text>
            </View>
            <View className="items-center px-2">
              <Text className="font-semibold text-white">Birthday</Text>
              <Text className="text-sm text-neutral-300">{person?.birthday}</Text>
            </View>
            <View className="items-center px-2">
              <Text className="font-semibold text-white">Known for</Text>
              <Text className="text-sm text-neutral-300">{person?.known_for_department}</Text>
            </View>
            <View className="items-center px-2">
              <Text className="font-semibold text-white">Popularity</Text>
              <Text className="text-sm text-neutral-300">{person?.popularity.toFixed(2)} %</Text>
            </View>
          </View>
          <View className="mx-4 my-6 space-y-2">
            <Text className="text-lg text-white">Biography</Text>
            <Text className="tracking-wide text-neutral-400">{person?.biography}</Text>
          </View>
          {personMoviesList.length > 0 && (
            <MovieList title="Movies" data={personMoviesList} hideSeeAll />
          )}
        </View>
      )}
    </ScrollView>
  );
}
