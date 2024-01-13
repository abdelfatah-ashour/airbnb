import { Text, View } from "react-native";

import tw from "lib/tailwind";
import { BtnPlusMinus } from "components/BtnPlusMinus";

type RowWhoEventProps = {
  title: string;
  label: string;
  count: number;
  decrease: () => void;
  increase: () => void;
};

export function RowComing({
  title,
  label,
  count,
  decrease,
  increase,
}: RowWhoEventProps) {
  return (
    <View style={tw`flex-row justify-between`}>
      <View>
        <Text style={tw`text-lg font-semibold`}>{title}</Text>
        <Text style={tw`text-sm font-regular`}>{label}</Text>
      </View>
      <BtnPlusMinus count={count} onDecrease={decrease} onIncrease={increase} />
    </View>
  );
}
