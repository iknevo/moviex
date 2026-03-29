import { AVATAR_FALLBACK_URI } from "config/constants";
import { useNavigate } from "hooks/use-navigate";
import { image185 } from "lib/api";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { Cast } from "types";

export default function CastMembers({ cast }: { cast: Cast[] }) {
  const { navigate } = useNavigate();
  return (
    <View className="my-6">
      <Text className="mx-4 mb-5 text-lg text-white">Top cast</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}>
        {cast &&
          cast.map((member) => (
            <Pressable
              key={member.id}
              className="mr-4 items-center"
              onPress={() => navigate("Person", { id: member.id })}>
              <View className="h-20 w-20 items-center overflow-hidden rounded-full border-neutral-500">
                <Image
                  className="h-24 w-20 rounded-2xl"
                  source={{ uri: image185(member.profile_path) || AVATAR_FALLBACK_URI }}
                />
              </View>
              <Text className="mt-1 text-xs text-white">
                {member.character.length > 10
                  ? member.character.slice(0, 10) + "..."
                  : member.character}
              </Text>
              <Text className="mt-1 text-xs text-neutral-400">
                {member.original_name.length > 10
                  ? member.original_name.slice(0, 10) + "..."
                  : member.original_name}
              </Text>
            </Pressable>
          ))}
      </ScrollView>
    </View>
  );
}
