import { useNavigate } from "hooks/use-navigate";
import { Dimensions, Image, Pressable, ScrollView, Text, View } from "react-native";
import { styles } from "theme";

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
  const movieName = "Movie Name Movie NameMovie NameMovie NameMovie Name";
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
        {data.map((movie: any) => (
          <Pressable key={movie} onPress={() => navigate("Movie", { id: movie.id })}>
            <View className="mr-4 space-y-1">
              <Image
                source={require("../assets/poster.webp")}
                className="rounded-3xl"
                style={{ width: width * 0.33, height: height * 0.22 }}
              />
            </View>
            <Text className="ml-1 text-neutral-300">
              {movieName.length > 14 ? movieName.slice(0, 14) + "..." : movieName}
            </Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}
