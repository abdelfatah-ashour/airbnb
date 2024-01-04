import { Text, TouchableHighlight, View } from "react-native";
import React, { Fragment } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchIcon from "../assets/icons/IconamoonSearch.svg";
import FilterIcon from "../assets/icons/LetsIconsFilter.svg";
import tw from "lib/tailwind";

export default function Header(props: any) {
  return (
    <SafeAreaView>
      <TouchableHighlight
        style={tw`flex-row items-center gap-2 px-2 bg-green-50`}
        onPress={() => props.navigation.navigate("BookingVisit")}
      >
        <Fragment>
          <View
            style={tw`flex-row items-center gap-2 p-2 flex-1 border rounded-full shadow`}
          >
            <SearchIcon width={32} height={32} color={"grey"} />
            <View>
              <Text>where to?</Text>
              <Text>Alexandria, Egypt</Text>
            </View>
          </View>
          <View style={tw`p-2 mx-5 border rounded-full`}>
            <FilterIcon width={24} height={24} color={"grey"} />
          </View>
          <View />
        </Fragment>
      </TouchableHighlight>
    </SafeAreaView>
  );
}
