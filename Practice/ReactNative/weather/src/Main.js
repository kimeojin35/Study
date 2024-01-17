import React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;

function Main() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.dayBox}>
        <Text style={styles.day}>Monday</Text>
        <Text style={styles.date}>04 September</Text>
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
      <View style={styles.anotherBox}>
        <View style={styles.descriptionBox}>
          <Text style={styles.topText}>21˚</Text>
          <Text style={styles.bottomText}>8˚</Text>
        </View>
        <View style={styles.descriptionBox}>
          <Text style={styles.topText}>0% Precipitation</Text>
          <Text style={styles.bottomText}>3 km/h Wind</Text>
        </View>
      </View>
    </View>
  );
}

export default Main;

const styles = StyleSheet.create({
  mainContainer: {
    width: SCREEN_WIDTH,
    marginVertical: 6,
    paddingHorizontal: 20,
  },
  dayBox: {
    marginVertical: 4,
    padding: 10,
  },
  day: {
    fontSize: 20,
    fontWeight: "700",
  },
  date: {
    fontSize: 20,
    fontWeight: "400",
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
  },
  tempTextBox: {
    paddingHorizontal: 20,
  },
  tempTitle: {
    fontSize: 160,
    fontWeight: "600",
    lineHeight: 180,
  },
  tempDescription: {
    fontSize: 24,
    fontWeight: "400",
  },
  anotherBox: {
    paddingVertical: 20,
    alignItems: "center",
    flexDirection: "row",
  },
  descriptionBox: {
    flex: 1,
  },
  topText: {
    fontSize: 20,
    fontWeight: "600",
  },
  bottomText: {
    fontSize: 20,
    fontWeight: "400",
  },
});
