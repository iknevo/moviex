import { useNavigate } from "hooks/use-navigate";
import { Image, Pressable, ScrollView, Text, View } from "react-native";

export default function CastMembers({ cast }: { cast: any[] }) {
  const { navigate } = useNavigate();
  const personName = "Keanu Reeves";
  const characterName = "John wick";
  return (
    <View className="my-6">
      <Text className="mx-4 mb-5 text-lg text-white">Top cast</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}>
        {cast &&
          cast.map((member, index) => (
            <Pressable
              key={index}
              className="mr-4 items-center"
              onPress={() => navigate("Person", { id: "1" })}>
              <View className="h-20 w-20 items-center overflow-hidden rounded-full border-neutral-500">
                <Image className="h-24 w-20 rounded-2xl" source={require("../assets/icon.png")} />
              </View>
              <Text className="mt-1 text-xs text-white">
                {characterName.length > 10 ? characterName.slice(0, 10) + "..." : characterName}
              </Text>
              <Text className="mt-1 text-xs text-neutral-400">
                {personName.length > 10 ? personName.slice(0, 10) + "..." : personName}
              </Text>
            </Pressable>
          ))}
      </ScrollView>
    </View>
  );
}
