import { SafeAreaProvider } from "react-native-safe-area-context";
import "./global.css";
import AppNavigation from "navigation/app-navigation";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        <AppNavigation />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
