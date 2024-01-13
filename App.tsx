import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import HomeNavigator from "screens/HomeNavigator";
import ProfileNavigator from "screens/ProfileNavigator";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Home">
          <Tab.Group>
            <Tab.Screen
              name="Home"
              component={HomeNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Tab.Screen
              name="profile"
              component={ProfileNavigator}
              options={{
                headerShown: false,
              }}
            />
          </Tab.Group>
        </Tab.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
