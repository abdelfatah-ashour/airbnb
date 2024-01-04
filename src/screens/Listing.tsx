import { Text, View } from "react-native";
import React from "react";
import SafeArea from "components/SafeArea";
import tw from "lib/tailwind";

export default function Listing() {
  return (
    <SafeArea>
      <View style={tw`flex-1 bg-gray-50`}>
        <Text style={tw`text-red-600`}>Listing</Text>
      </View>
    </SafeArea>
  );
}
