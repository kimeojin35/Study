import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Topbar from "./src/Topbar";
import Main from "./src/Main";

export default function App() {
  return (
    <View style={styles.container}>
      <Topbar />
      <Main />
      <View style={styles.dayBox}></View>
      <View style={styles.tempBox}></View>
      <View style={styles.detailsBox}></View>
      <View style={styles.pagenation}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E4D0FF",
    marginVertical: 24,
    justifyContent: "center",
    alignItems: "flex-start",
    fontFamily: "Pretendard",
  },
  dayBox: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 4,
  },
});
