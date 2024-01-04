import { View, Text, TouchableOpacity } from "react-native";
import React, { Fragment, PropsWithChildren } from "react";

export function According({ children }: PropsWithChildren) {
  return <Fragment>{children}</Fragment>;
}

type AccordingHeaderProps = {
  onPress: () => void;
};

export function AccordingHeader({
  children,
}: PropsWithChildren<AccordingHeaderProps>) {
  return <TouchableOpacity>{children}</TouchableOpacity>;
}

export function AccordingBody() {
  return (
    <View>
      <Text>AccordingHeader</Text>
    </View>
  );
}
