import Loading from "components/loading";
import MovieList from "components/movie-list";
import { useNavigate } from "hooks/use-navigate";
import { useState } from "react";
import { Dimensions, Image, Pressable, ScrollView, Text, View } from "react-native";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles, theme } from "theme";

const { width, height } = Dimensions.get("window");

export default function PersonScreen() {
  const [isFav, setIsFav] = useState(false);
  const { navigate, goBack } = useNavigate();
  const [personMovies] = useState([1, 2, 3, 4]);
  const [loading, setLoading] = useState(false);

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
                source={require("../assets/poster.webp")}
                style={{ height: "100%", width: "100%" }}
              />
            </View>
          </View>
          <View className="mt-6">
            <Text className="text-center text-3xl font-bold text-white">Keanu Reeves</Text>
            <Text className="text-center text-base font-bold text-neutral-500">
              London, United Kingdom
            </Text>
          </View>
          <View className="mx-3 mt-6 border-separate flex-row items-center justify-between rounded-full bg-neutral-700 p-4">
            <View className="items-center px-2">
              <Text className="font-semibold text-white">Gender</Text>
              <Text className="text-sm text-neutral-300">Male</Text>
            </View>
            <View className="items-center px-2">
              <Text className="font-semibold text-white">Birthday</Text>
              <Text className="text-sm text-neutral-300">1990-12-01</Text>
            </View>
            <View className="items-center px-2">
              <Text className="font-semibold text-white">Known for</Text>
              <Text className="text-sm text-neutral-300">Acting</Text>
            </View>
            <View className="items-center px-2">
              <Text className="font-semibold text-white">Popularity</Text>
              <Text className="text-sm text-neutral-300">64.2</Text>
            </View>
          </View>
          <View className="mx-4 my-6 space-y-2">
            <Text className="text-lg text-white">Biography</Text>
            <Text className="tracking-wide text-neutral-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste vero possimus officia
              dolorum eius quas ad sequi, incidunt quisquam aliquam error quidem magni suscipit ex
              dolorem aut sapiente pariatur minima?
            </Text>
          </View>
          <MovieList title="Movies" data={personMovies} hideSeeAll />
        </View>
      )}
    </ScrollView>
  );
}
