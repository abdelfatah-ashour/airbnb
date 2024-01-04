import { NavigationContainer } from "@react-navigation/native";
import SafeArea from "components/SafeArea";
import { StyleSheet, Text } from "react-native";

import HomeNavigator from "screens/HomeNavigator";
import Header from "components/Header";
import ProfileNavigator from "screens/ProfileNavigator";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Group>
          <Tab.Screen
            name="Home"
            component={HomeNavigator}
            options={{
              header: Header,
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
