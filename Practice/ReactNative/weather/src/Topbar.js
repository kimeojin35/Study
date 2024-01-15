import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Menu, Search } from "./svg";

function Topbar() {
  return (
    <View style={styles.topBar}>
      <Menu />
      <View style={styles.tmp} />
      <Text style={styles.header}>HAMBURG</Text>
      <View style={styles.tmp} />
      <Search />
    </View>
  );
}

export default Topbar;

const styles = StyleSheet.create({
  topBar: {
    flexDirection: "row",
    padding: 30,
    justifyContent: "space-between",
  },
  tmp: {
    flex: 1,
  },
  header: {
    fontSize: 20,
  },
});
