import { useRoute } from "@react-navigation/native";
import CastMembers from "components/cast-members";
import MovieList from "components/movie-list";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigate } from "hooks/use-navigate";
import { useState } from "react";
import { Dimensions, Image, Pressable, ScrollView, Text, View } from "react-native";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles, theme } from "theme";

const { width, height } = Dimensions.get("window");

export default function MovieScreen() {
  const [isFav, setIsFav] = useState(false);
  const [castMembers, setCastMembers] = useState([1, 2, 3, 4, 5, 6]);
  const [similarMovies, setSimilarMovies] = useState([1, 2, 3, 4, 5, 6]);
  const { params } = useRoute();
  const { id } = params;
  const { navigate, goBack } = useNavigate();

  const movieName = "Movie Name Movie NameMovie NameMovie NameMovie Name";
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
        <View style={{ position: "relative" }}>
          <Image
            source={require("../assets/poster.webp")}
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
      </View>
      <View className="space-y-3" style={{ marginTop: -(height * 0.09) }}>
        <Text className="text-center text-3xl font-bold tracking-wider text-white">
          {movieName}
        </Text>
        <Text className="text-center text-base font-semibold text-neutral-400">
          released - year - 178 min
        </Text>
        <View className="mx-4 flex-row justify-center space-x-2">
          <Text className="text-center text-base font-semibold text-neutral-400">Action -</Text>
          <Text className="text-center text-base font-semibold text-neutral-400">Thrill -</Text>
          <Text className="text-center text-base font-semibold text-neutral-400">comedy</Text>
        </View>
        <Text className="mx-4 tracking-wide text-neutral-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, itaque nobis deleniti at
          animi ducimus dolorum pariatur, possimus ratione facere laudantium quasi cum perferendis.
          Maxime esse quo earum nesciunt impedit?
        </Text>
      </View>
      <CastMembers cast={castMembers} />
      <MovieList title="Similar Movies" data={similarMovies} hideSeeAll={true} />
    </ScrollView>
  );
}
