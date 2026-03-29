import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "screens/home-screen";
import MovieScreen from "screens/movie-screen";

export type RootStackParamList = {
  Home: undefined;
  Movie: { id: string };
  Person: { id: string };
};
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
        <Stack.Screen name="Movie" options={{ headerShown: false }} component={MovieScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
