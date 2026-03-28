import { SafeAreaProvider } from "react-native-safe-area-context";
import "./global.css";
import AppNavigation from "navigation/app-navigation";

export default function App() {
  return (
    <SafeAreaProvider>
      <AppNavigation />
    </SafeAreaProvider>
  );
}
