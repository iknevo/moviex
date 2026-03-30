import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "screens/home-screen";
import MovieScreen from "screens/movie-screen";
import PersonScreen from "screens/person-screen";
import SearchScreen from "screens/search-screen";
import { RootStackParamList } from "./app-navigation";

const Stack = createNativeStackNavigator<RootStackParamList>();

export function StackNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Movie" component={MovieScreen} />
      <Stack.Screen name="Person" component={PersonScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
    </Stack.Navigator>
  );
}
