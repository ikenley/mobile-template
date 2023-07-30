import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailsScreen from "./src/DetailsScreen";
import HomeScreen from "./src/HomeScreen";
import { RootStackParamList } from "./src/types";

const Stack = createNativeStackNavigator(RootStackParamList);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Overview" }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          initialParams={{ itemId: 2001 }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
