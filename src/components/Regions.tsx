import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";
import { places } from "assets/data/places-data";
import tw from "lib/tailwind";

type RegionsProps = {
  selected: string;
  onSelect: (value: string) => void;
};

export default function Regions({ selected, onSelect }: RegionsProps) {
  return (
    <FlatList
      data={places}
      renderItem={({ item }) => {
        return (
          <View>
            <TouchableOpacity
              style={tw`w-28 h-28 border border-gray-400 rounded overflow-hidden`}
              onPress={() => onSelect(item.title)}
            >
              <Image
                source={item.img}
                alt={item.title}
                style={tw`w-full h-full`}
              />
            </TouchableOpacity>
            <Text
              style={tw`text-xs text-center mt-2 capitalize ${
                selected === item.title
                  ? "text-gray-950 font-semibold"
                  : "text-gray-400 font-normal"
              }`}
            >
              {item.title}
            </Text>
          </View>
        );
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={tw`gap-x-4`}
    />
  );
}
