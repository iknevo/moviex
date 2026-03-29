import { useNavigate } from "hooks/use-navigate";
import { image500 } from "lib/api";
import { Dimensions, Image, Pressable, ScrollView, Text, View } from "react-native";
import { styles } from "theme";
import { Movie } from "types";

const { width, height } = Dimensions.get("window");

export default function MovieList({
  title,
  data,
  hideSeeAll,
}: {
  title: string;
  data: any;
  hideSeeAll?: boolean;
}) {
  const { navigate } = useNavigate();
  return (
    <View className="mb-8 flex-1 space-y-4">
      <View className="m-4 flex-row items-center justify-between">
        <Text className="text-xl text-white">{title}</Text>
        {!hideSeeAll && (
          <Pressable>
            <Text style={styles.text} className="text-lg">
              See All
            </Text>
          </Pressable>
        )}
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}>
        {data.map((movie: Movie) => (
          <Pressable key={movie.id} onPress={() => navigate("Movie", { movie })}>
            <View className="mr-4 space-y-1">
              <Image
                source={{ uri: image500(movie.poster_path) }}
                className="rounded-3xl"
                style={{ width: width * 0.33, height: height * 0.22 }}
              />
            </View>
            <Text className="ml-1 mt-2 text-neutral-300">
              {movie.title.length > 14 ? movie.title.slice(0, 14) + "..." : movie.title}
            </Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}
