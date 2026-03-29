import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "navigation/app-navigation";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export const useNavigate = () => {
  const navigation = useNavigation<NavigationProp>();
  return navigation;
};
