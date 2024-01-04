import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from 'screens/Profile';
import Login from 'components/models/Login';
import BookingVisit from 'screens/BookVisit';

export type RootStackParamList = {
  Profile: undefined;
  login: undefined;
  BookVisit: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function ProfileNavigator() {
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Group>
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Group>
      <Stack.Group screenOptions={{presentation: 'modal'}}>
        <Stack.Screen name="login" component={Login} />
      </Stack.Group>
      <Stack.Group screenOptions={{presentation: 'transparentModal'}}>
        <Stack.Screen name="BookVisit" component={BookingVisit} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
