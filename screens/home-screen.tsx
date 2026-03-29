import { StatusBar } from "expo-status-bar";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { styles } from "theme";
import TrendingMovies from "components/trending-movies";
import MovieList from "components/movie-list";

export default function HomeScreen() {
  return (
    <View className="flex-1  bg-neutral-800">
      <SafeAreaView className="ios:-mb-2 android:mb-3">
        <StatusBar style="light" />
        <View className="mx-4 mt-4 flex-row items-center justify-between">
          <Bars3CenterLeftIcon size={30} strokeWidth={2} color="#ffffff" />
          <Text className="text-3xl font-bold text-white">
            <Text style={styles.text}>M</Text>
            oviex
          </Text>
          <Pressable>
            <MagnifyingGlassIcon size={30} strokeWidth={2} color="#ffffff" />
          </Pressable>
        </View>
      </SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}>
        <TrendingMovies data={[1, 2, 3]} />
        <MovieList title="Upcoming" data={[1, 2, 3]} />
        <MovieList title="Top Rated" data={[1, 2, 3]} />
      </ScrollView>
    </View>
  );
}
