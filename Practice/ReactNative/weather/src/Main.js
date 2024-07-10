import { Fontisto } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;

const icons = {
  Clouds: "cloudy",
  Clear: "day-sunny",
  Atmosphere: "cloudy-gusts",
  Snow: "snow",
  Rain: "rains",
  Drizzle: "rain",
  Thunderstorm: "lightning",
};

function Main({ description, temp, emoji }) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.dayBox}>
        <Text style={styles.day}>Monday</Text>
        <Text style={styles.date}>04 September</Text>
      </View>
      <View style={styles.tempBox}>
        <View style={styles.line}></View>
        <View style={styles.tempTextBox}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.tempDescription}>{emoji}</Text>
            <Fontisto name={icons[{ description }]} size={24} />
          </View>
          <Text style={styles.tempTitle}>{temp}˚</Text>
          <Text style={styles.tempDescription}>{description}</Text>
        </View>
        <View style={styles.line}></View>
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
  line: {
    height: 2,
    width: "100%",
    backgroundColor: "#000",
    marginVertical: 24,
  },
  tmp: {
    flex: 1,
  },
  tempBox: {
    flex: 1,
    justifyContent: "space-between",
  },
  tempTextBox: {},
  tempTitle: {
    fontSize: 120,
    fontWeight: "600",
    lineHeight: 180,
  },
  tempDescription: {
    fontSize: 24,
    fontWeight: "400",
    marginHorizontal: 20,
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
