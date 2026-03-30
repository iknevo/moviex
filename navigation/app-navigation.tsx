import { NavigationContainer } from "@react-navigation/native";
import { DrawerNavigator } from "./drawer";

export type RootStackParamList = {
  Home: undefined;
  Movie: { id: number };
  Person: { id: number };
  Search: undefined;
};

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
