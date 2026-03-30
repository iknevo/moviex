import Loading from "components/loading";
import { useSearch } from "hooks/api/use-search";
import { useNavigate } from "hooks/use-navigate";
import { useEffect, useMemo, useState } from "react";
import { Dimensions, Image, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { XMarkIcon, FilmIcon } from "react-native-heroicons/outline";
import { SafeAreaView } from "react-native-safe-area-context";
import { debounce } from "lodash";
import { image185 } from "lib/api";
import { POSTER_FALLBACK_URI } from "config/constants";

const { width, height } = Dimensions.get("window");

export default function SearchScreen() {
  const { navigate, push } = useNavigate();
  const [query, setQuery] = useState("");
  const { data, isLoading } = useSearch(query);
  const results = data?.results ?? [];

  const debouncedSearch = useMemo(() => debounce((value: string) => setQuery(value), 400), []);

  useEffect(() => {
    return () => debouncedSearch.cancel();
  }, [debouncedSearch]);

  return (
    <SafeAreaView className="flex-1 bg-neutral-800">
      <View className="mx-4 my-3 flex-row items-center justify-between rounded-full border border-neutral-500">
        <TextInput
          onChangeText={debouncedSearch}
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
      {isLoading ? (
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
                  push("Movie", { id: item.id });
                }}>
                <View className="mb-4 space-y-2">
                  <Image
                    source={{ uri: image185(item.poster_path) || POSTER_FALLBACK_URI }}
                    style={{ width: width * 0.44, height: height * 0.3 }}
                    className="rounded-md"
                  />
                  <Text className="ml-1 mt-1 text-neutral-300">
                    {item.title.length > 22 ? item.title.slice(0, 22) + "..." : item.title}
                  </Text>
                </View>
              </Pressable>
            ))}
          </View>
        </ScrollView>
      ) : (
        <View className="mt-20 items-center px-6">
          <FilmIcon size={40} color={"#ffffff"} />
          <Text className="mt-2 text-center text-3xl text-neutral-400">
            Start by searching for a movie.
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
}
