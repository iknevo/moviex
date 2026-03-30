import { StatusBar } from "expo-status-bar";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { styles } from "theme";
import TrendingMovies from "components/trending-movies";
import MovieList from "components/movie-list";
import { useNavigate } from "hooks/use-navigate";
import Loading from "components/loading";
import { useGetUpcoming } from "hooks/api/use-get-upcoming";
import { useGetTrending } from "hooks/api/use-get-trending";
import { useGetTopRated } from "hooks/api/use-get-top-rated";
import { useNavigation, DrawerActions } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();
  const { navigate } = useNavigate();
  const { data: upcoming, isLoading: isLoadingUpcoming } = useGetUpcoming();
  const { data: trending, isLoading: isLoadingTrending } = useGetTrending();
  const { data: topRated, isLoading: isLoadingTopRated } = useGetTopRated();
  const loading = isLoadingUpcoming || isLoadingTrending || isLoadingTopRated;
  const trendingMovies = trending?.results ?? [];
  const upcomingMovies = upcoming?.results ?? [];
  const topRatedMovies = topRated?.results ?? [];

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <View className="flex-1 bg-neutral-800">
      <SafeAreaView className="ios:-mb-2 android:mb-3">
        <StatusBar style="light" />
        <View className="mx-4 mt-4 flex-row items-center justify-between">
          <Pressable onPress={openDrawer}>
            <Bars3CenterLeftIcon size={30} strokeWidth={2} color="#ffffff" />
          </Pressable>
          <Text className="text-3xl font-bold text-white">
            <Text style={styles.text}>M</Text>
            oviex
          </Text>
          <Pressable onPress={() => navigate("Search")}>
            <MagnifyingGlassIcon size={30} strokeWidth={2} color="#ffffff" />
          </Pressable>
        </View>
      </SafeAreaView>
      {loading ? (
        <Loading />
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 10 }}>
          {trendingMovies.length > 0 && <TrendingMovies data={trendingMovies} />}
          {upcomingMovies.length > 0 && <MovieList title="Upcoming" data={upcomingMovies} />}
          {topRatedMovies.length > 0 && <MovieList title="Top Rated" data={topRatedMovies} />}
        </ScrollView>
      )}
    </View>
  );
}
