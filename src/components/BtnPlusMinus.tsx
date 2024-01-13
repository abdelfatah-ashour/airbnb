import tw from "lib/tailwind";
import { Text, TouchableOpacity, View } from "react-native";

type BtnPlusMinusProps = {
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
};

export function BtnPlusMinus({
  count,
  onDecrease,
  onIncrease,
}: BtnPlusMinusProps) {
  return (
    <View style={tw`flex-row justify-between gap-x-3 items-center`}>
      <TouchableOpacity
        onPress={() => onDecrease()}
        style={tw`rounded-full bg-opacity-75 border border-gray-200 shadow-sm font-bold text-sm text-center w-8 h-8 flex-row justify-center items-center ${
          count > 0 ? "bg-white border-gray-400 opacity-100" : ""
        }`}
        disabled={count <= 0}
      >
        <Text
          style={tw`font-regular text-xl text-gray-200 ${
            count > 0 ? "text-gray-400" : ""
          }`}
        >
          -
        </Text>
      </TouchableOpacity>
      <Text style={tw`font-regular text-sm text-center text-gray-600`}>
        {String(count)}
      </Text>
      <TouchableOpacity
        onPress={() => onIncrease()}
        style={tw`rounded-full bg-opacity-75 border border-gray-200 shadow-sm font-bold text-sm text-center w-8 h-8 flex-row justify-center items-center ${
          count < 10 ? "bh-white border-gray-400 opacity-100" : ""
        }`}
        disabled={count >= 10}
      >
        <Text
          style={tw`font-regular text-xl text-gray-200 ${
            count < 10 ? "text-gray-400" : ""
          }`}
        >
          +
        </Text>
      </TouchableOpacity>
    </View>
  );
}
