import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import CloseICon from "assets/icons/MaterialSymbolsCloseRounded.svg";
import Places from "components/Regions";
import tw from "lib/tailwind";

export default function BookVisit({ navigation }: any) {
  return (
    <View style={tw`flex-1 gap-5 p-3 bg-gray-50`}>
      <View style={{}}>
        <TouchableOpacity
          style={tw`bg-white rounded-full p-1 border`}
          onPress={() => navigation.goBack()}
        >
          <CloseICon width={20} height={20} color={"#a1a1a1"} />
        </TouchableOpacity>

        <View style={{}}>
          <Text>Stays</Text>
          <Text>Experiences</Text>
        </View>
      </View>
      <View style={tw`bg-white px-5 rounded-xl`}>
        <View
          style={tw`flex-row justify-between mb-3 border-b-2 border-gray-100 py-6`}
        >
          <Text>Where to?</Text>
          <Text>I'm Flexible</Text>
        </View>
        <Places />
      </View>
      <View style={tw`bg-white px-5 rounded-xl`}>
        <View
          style={tw`flex-row justify-between mb-3 border-b-2 border-gray-100 py-6`}
        >
          <Text>Where to?</Text>
          <Text>I'm Flexible</Text>
        </View>
      </View>
      <View style={tw`bg-white px-5 rounded-xl`}>
        <View
          style={tw`flex-row justify-between mb-3 border-b-2 border-gray-100 py-6`}
        >
          <Text>Where to?</Text>
          <Text>I'm Flexible</Text>
        </View>
      </View>
    </View>
  );
}
