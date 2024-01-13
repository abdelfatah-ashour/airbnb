import { TouchableOpacity } from "react-native";
import React, { ReactNode } from "react";
import Animated, {
  cancelAnimation,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import tw from "lib/tailwind";

type AccordingProps = {
  open: boolean;
  onChangeOpen: (status: boolean) => void;
  header: ReactNode;
  body: ReactNode;
};

export default function According({
  open,
  onChangeOpen,
  header,
  body,
}: AccordingProps) {
  const height = useSharedValue(0);

  return (
    <>
      <TouchableOpacity
        onPress={() => {
          onChangeOpen(open);
          if (!open) {
            height.value = withSpring(100);
          } else {
            cancelAnimation(height);
          }
        }}
      >
        {header}
      </TouchableOpacity>
      {open ? (
        <Animated.View style={[{ minHeight: height }]}>{body}</Animated.View>
      ) : null}
    </>
  );
}
