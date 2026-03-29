import { POSTER_FALLBACK_URI } from "config/constants";
import { useNavigate } from "hooks/use-navigate";
import { image500 } from "lib/api";
import { Dimensions, Image, Pressable, Text, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { type Movie } from "types";

interface Props {
  data: Movie[];
}

const { width, height } = Dimensions.get("window");

export default function TrendingMovies({ data }: Props) {
  const { navigate } = useNavigate();
  const handlePress = (movie: Movie) => {
    navigate("Movie", { id: movie.id });
  };

  return (
    <View className="mb-8">
      <Text className="mx-4 mb-5 text-xl text-white">Trending</Text>
      <View className="flex-1">
        <Carousel
          autoPlayInterval={500}
          data={data}
          loop={true}
          pagingEnabled={true}
          snapEnabled={true}
          style={{ width: width, height: height * 0.5 }}
          mode="parallax"
          modeConfig={{ parallaxScrollingScale: 0.9, parallaxScrollingOffset: 50 }}
          renderItem={({ item }) => (
            <View style={{ alignItems: "center", backgroundColor: "red" }}>
              <MovieCard item={item} handlePress={handlePress} />
            </View>
          )}
          width={width}
          height={height * 0.8}
        />
      </View>
    </View>
  );
}
const MovieCard = ({ item, handlePress }: { item: Movie; handlePress: (item: Movie) => void }) => {
  return (
    <Pressable style={{ flex: 1 }} onPress={() => handlePress(item)}>
      <Image
        className="rounded-3xl"
        source={{ uri: image500(item.poster_path) || POSTER_FALLBACK_URI }}
        style={{ width: width * 0.8, height: 600, objectFit: "cover" }}
      />
    </Pressable>
  );
};
