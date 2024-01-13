import tw from "lib/tailwind";
import { View } from "react-native";

export function Separator() {
  return <View style={tw`border-b border-gray-200 w-full h-1`}></View>;
}
