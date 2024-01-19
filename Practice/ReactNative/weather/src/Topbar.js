import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Menu, Search } from "./svg";

function Topbar({ city }) {
  return (
    <View style={styles.topBar}>
      <Menu />
      <View style={styles.tmp} />
      <Text style={styles.header}>{city}</Text>
      <View style={styles.tmp} />
      <Search />
    </View>
  );
}

export default Topbar;

const styles = StyleSheet.create({
  topBar: {
    flexDirection: "row",
    paddingHorizontal: 30,
    paddingVertical: 30,
    justifyContent: "space-between",
    alignItems: "center",
  },
  tmp: {
    flex: 1,
  },
  header: {
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 24,
  },
});
