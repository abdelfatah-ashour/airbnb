import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import { categories } from "constants/categories";

export default function Places() {
  return (
    <FlatList
      data={categories}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <item.Icon width={32} height={32} color={"grey"} />
          <Text style={{ textAlign: "center" }}>{item.name}</Text>
        </View>
      )}
      horizontal
      contentContainerStyle={{ gap: 20, paddingVertical: 10 }}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    alignItems: "center",
    gap: 10,
  },
});
