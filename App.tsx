import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import CardList from "./screens/CardList";
import AddNewCard from "./screens/AddNewCard";
import { Image, Text } from "react-native";
import { icons, styles } from "./constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import IconButton from "./components/IconButton";
import { CardProvider } from "./hooks/CardDataProvider";
const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, error] = useFonts({
    "FC_Subject-Rounded_Bold": require("./assets/fonts/FC_Subject_Rounded_Bold.ttf"),
    "FC_Subject-Rounded_Regular": require("./assets/fonts/FC_Subject_Rounded_Regular.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;
  return (
    <CardProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Card List"
            component={CardList}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Add New Card"
            component={AddNewCard}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar backgroundColor={styles.colors.primary} />
    </CardProvider>
  );
}
