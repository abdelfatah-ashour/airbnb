import { StyleSheet } from "react-native";
import { COLORS } from "../constants/Colors";

export const SIZES = {
  cutter: 8,
  inputs_height: 56,
};

export const FONT = {
  weight: {
    CairoBlack: "CairoBlack",
    CairoBold: "CairoBold",
    CairoExtraBold: "CairoExtraBold",
    CairoExtraLight: "CairoExtraLight",
    CairoLight: "CairoLight",
    CairoMedium: "CairoMedium",
    CairoRegular: "CairoRegular",
    CairoSemiBold: "CairoSemiBold",
  },
};

export const default_styles = StyleSheet.create({
  btn: {
    borderRadius: SIZES.cutter,
    borderColor: COLORS.tint,
    borderWidth: 1,
    width: "100%",
    height: SIZES.cutter * 7,
  },
  btn_social: {
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    columnGap: SIZES.cutter,
  },
  input: {
    flex: 1,
    borderRadius: SIZES.cutter,
    padding: SIZES.cutter / 2,
  },
});
