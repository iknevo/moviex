import { Dimensions, View } from "react-native";
import * as Progress from "react-native-progress";
import { theme } from "theme";

const { width, height } = Dimensions.get("window");

export default function Loading() {
  return (
    <View
      className="absolute flex-row items-center justify-center"
      style={{
        width,
        height,
      }}>
      <Progress.CircleSnail thickness={12} size={160} color={theme.background} />
    </View>
  );
}
