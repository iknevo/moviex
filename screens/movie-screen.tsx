import { RouteProp, useRoute } from "@react-navigation/native";
import CastMembers from "components/cast-members";
import Loading from "components/loading";
import MovieList from "components/movie-list";
import { POSTER_FALLBACK_URI } from "config/constants";
import { LinearGradient } from "expo-linear-gradient";
import { useGetMovieById } from "hooks/api/use-get-movie-by-id";
import { useGetMovieCrew } from "hooks/api/use-get-movie-crew";
import { useGetMovieSimilars } from "hooks/api/use-get-movie-similars";
import { useNavigate } from "hooks/use-navigate";
import { image500 } from "lib/api";
import { RootStackParamList } from "navigation/app-navigation";
import { useState } from "react";
import { Dimensions, Image, Pressable, ScrollView, Text, View } from "react-native";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles, theme } from "theme";

const { width, height } = Dimensions.get("window");
type MovieRouteProp = RouteProp<RootStackParamList, "Movie">;

export default function MovieScreen() {
  const [isFav, setIsFav] = useState(false);
  const {
    params: { id },
  } = useRoute<MovieRouteProp>();

  const { data: movie, isLoading: isLoadingMovieDetails } = useGetMovieById(id);
  const { data: movieSimilars, isLoading: isLoadingMovieSimilars } = useGetMovieSimilars(id);
  const { data: movieCrew, isLoading: isLoadingMovieCrew } = useGetMovieCrew(id);

  const similarMovies = movieSimilars?.results ?? [];

  const isLoading = isLoadingMovieDetails || isLoadingMovieSimilars || isLoadingMovieCrew;

  const { goBack } = useNavigate();

  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 20 }} className="flex-1 bg-neutral-800">
      <View className="w-full">
        <SafeAreaView className="absolute z-20 mt-4 w-full flex-row items-center justify-between px-4">
          <Pressable className="rounded-xl p-1" style={styles.background} onPress={() => goBack()}>
            <ChevronLeftIcon size={28} strokeWidth={2.5} color="#ffffff" />
          </Pressable>

          <Pressable onPress={() => setIsFav((prev) => !prev)}>
            <HeartIcon size={35} color={isFav ? theme.background : "#cccccc"} />
          </Pressable>
        </SafeAreaView>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <View style={{ position: "relative" }}>
              <Image
                source={{ uri: image500(movie?.poster_path) || POSTER_FALLBACK_URI }}
                style={{ width, height: height * 0.55 }}
              />

              <LinearGradient
                colors={["transparent", "rgba(23,23,23,0.8)", "rgba(23,23,23,1)"]}
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: height * 0.4,
                }}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
              />
            </View>

            <View className="space-y-3" style={{ marginTop: -(height * 0.09) }}>
              <Text className="text-center text-3xl font-bold tracking-wider text-white">
                {movie?.title}
              </Text>
              {movie?.id ? (
                <Text className="text-center text-base font-semibold text-neutral-400">
                  {movie?.status} - {movie?.release_date.split("-")[0]} - {movie?.runtime} mins
                </Text>
              ) : null}
              <View className="mx-4 flex-row justify-center space-x-2">
                {movie?.genres?.map((genre, index) => (
                  <Text
                    key={genre.id}
                    className="text-center text-base font-semibold text-neutral-400">
                    {genre.name} {movie.genres.length !== index + 1 ? "-" : ""}
                  </Text>
                ))}
              </View>
              <Text className="m-4 tracking-wide text-neutral-400">{movie?.overview}</Text>
            </View>
            {movieCrew?.cast && <CastMembers cast={movieCrew?.cast} />}
            {similarMovies?.length > 0 && (
              <MovieList title="Similar Movies" data={similarMovies} hideSeeAll />
            )}
          </>
        )}
      </View>
    </ScrollView>
  );
}
