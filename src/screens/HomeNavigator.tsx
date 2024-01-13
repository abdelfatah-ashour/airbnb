import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Listing from "screens/Listing";
import BookingVisit from "screens/BookVisit";

export type HomeNavigatorRootStackParamList = {
  Index: undefined;
  BookingVisit: undefined;
  listing: undefined;
};

const Stack = createNativeStackNavigator<HomeNavigatorRootStackParamList>();

export default function HomeNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Index"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Group>
        <Stack.Screen
          name="Index"
          component={Listing}
          options={{ headerShown: false }}
        />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: "fullScreenModal" }}>
        <Stack.Screen name="BookingVisit" component={BookingVisit} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
