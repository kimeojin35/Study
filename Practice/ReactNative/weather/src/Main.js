import React from "react";
import { StyleSheet, View, Text } from "react-native";

function Main() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.dayBox}>
        <Text>Monday</Text>
        <Text>04 September</Text>
      </View>
      <View style={styles.tempBox}>
        <View style={styles.lineBox}>
          <View style={styles.line}></View>
        </View>
        <View style={styles.tempTextBox}>
          <Text style={styles.tempTitle}>27˚</Text>
          <Text style={styles.tempDescription}>Sunny</Text>
        </View>
        <View style={styles.lineBox}>
          <View style={styles.line}></View>
        </View>
      </View>
    </View>
  );
}

export default Main;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginVertical: 6,
    paddingHorizontal: 20,
    backgroundColor: "blue",
    width: "100%",
  },
  dayBox: {
    marginVertical: 4,
    padding: 10,
  },
  lineBox: {
    width: "100%",
    paddingVertical: 24,
  },
  line: {
    height: 2,
    width: "100%",
    backgroundColor: "#000",
  },
  tmp: {
    flex: 1,
  },
  tempBox: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "red",
  },
  tempTextBox: {},
  tempTitle: {},
  tempDescription: {},
});

const fonts = StyleSheet.create({});
