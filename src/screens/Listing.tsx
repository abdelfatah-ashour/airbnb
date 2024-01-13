import { Text, View } from "react-native";
import React from "react";
import SafeArea from "components/SafeArea";
import tw from "lib/tailwind";
import Header from "components/Header";

export default function Listing() {
  return (
    <SafeArea>
      <Header />
      <Text style={tw`text-red-600`}>Listing</Text>
    </SafeArea>
  );
}
