import Loading from "components/loading";
import { useNavigate } from "hooks/use-navigate";
import { useState } from "react";
import { Dimensions, Image, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { XMarkIcon } from "react-native-heroicons/outline";
import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");

export default function SearchScreen() {
  const { navigate, push } = useNavigate();
  const [results] = useState([1, 2, 3, 4]);
  const movieName = "Movie Name Movie NameMovie NameMovie NameMovie Name";
  const [loading] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-neutral-800">
      <View className="mx-4 my-3 flex-row items-center justify-between rounded-full border border-neutral-500">
        <TextInput
          placeholder="Search Movies"
          placeholderTextColor={"lightgray"}
          className="flex-1 pb-1 pl-6 text-base font-semibold tracking-wider text-white"
        />
        <Pressable
          onPress={() => {
            navigate("Home");
          }}
          className="m-1 rounded-full bg-neutral-500 p-3">
          <XMarkIcon size={25} color="#ffffff" />
        </Pressable>
      </View>
      {loading ? (
        <Loading />
      ) : results.length > 0 ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 15 }}
          className="space-y-3">
          <Text className="mb-4 ml-1 font-semibold text-white">Results ({results.length})</Text>
          <View className="flex-row flex-wrap justify-between">
            {results.map((item, i) => (
              <Pressable
                key={i}
                onPress={() => {
                  push("Movie", { id: "1" });
                }}>
                <View className="mb-4 space-y-2">
                  <Image
                    source={require("../assets/poster.webp")}
                    style={{ width: width * 0.44, height: height * 0.3 }}
                  />
                  <Text className="ml-1 text-neutral-300">
                    {movieName.length > 22 ? movieName.slice(0, 22) + "..." : movieName}
                  </Text>
                </View>
              </Pressable>
            ))}
          </View>
        </ScrollView>
      ) : (
        <Text>no results found</Text>
      )}
    </SafeAreaView>
  );
}
