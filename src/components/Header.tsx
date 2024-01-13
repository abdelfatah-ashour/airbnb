import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import SearchIcon from "../assets/icons/IconamoonSearch.svg";
import FilterIcon from "../assets/icons/LetsIconsFilter.svg";
import tw from "lib/tailwind";
import { useNavigation } from "@react-navigation/native";

export default function Header() {
  const navigation = useNavigation<any>();

  return (
    <View style={tw`w-full flex-row items-center gap-2 my-4`}>
      <View
        style={tw`flex-grow rounded-full border border-gray-300  bg-white shadow shadow-gray-400`}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("BookingVisit")}
          style={tw`flex-row items-center gap-2 p-2`}
        >
          <SearchIcon width={32} height={32} color={"grey"} />
          <View>
            <Text style={tw`text-sm capitalize font-semibold p-1`}>
              where to?
            </Text>
            <Text style={tw`text-gray-400 text-[12px] p-1`}>
              Alexandria, Egypt
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={tw`p-4 rounded-full border border-gray-300  bg-white shadow shadow-gray-400`}
      >
        <FilterIcon width={24} height={24} color={"grey"} />
      </View>
      <View />
    </View>
  );
}
