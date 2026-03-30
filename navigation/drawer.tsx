import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { StackNavigation } from "./stack";
import SearchScreen from "screens/search-screen";
import { View, Text } from "react-native";

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props}>
      <View className="mb-4 px-4">
        <Text className="text-3xl font-bold text-white">Movix</Text>
        <Text className="text-base text-neutral-400">Navigate the app</Text>
      </View>

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

export function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: "#262626",
        },
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#aaa",
      }}>
      <Drawer.Screen name="Home" component={StackNavigation} options={{ title: "Home" }} />
      <Drawer.Screen name="Search" component={SearchScreen} options={{ title: "Search Movies" }} />
    </Drawer.Navigator>
  );
}
