import tw from "lib/tailwind";
import React from "react";
import type { PropsWithChildren } from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  useColorScheme,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function SafeArea({ children }: PropsWithChildren) {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={tw`flex-1`}>
      <StatusBar
        barStyle={isDarkMode ? "light-content" : "dark-content"}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={tw`flex-1 bg-gray-50`}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
