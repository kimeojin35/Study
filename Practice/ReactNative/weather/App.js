import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Topbar from "./src/Topbar";
import Main from "./src/Main";

const API_KEY = "9986b21f6fe19c3434ad6e289f78df17";

export default function App() {
  const [city, setCity] = useState("Loading...");
  const [days, setDays] = useState([]);
  const [location, setLocation] = useState();
  const [ok, setOk] = useState(true);
  const ask = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (!granted) {
      setOk(false);
    }
    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({ accuracy: 5 });
    const location = await Location.reverseGeocodeAsync(
      { latitude, longitude },
      { useGoogleMaps: false }
    );
    setCity(location[0].city);
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
    );
    const json = await response.json();
    // setDays(json.daily);
  };
  useEffect(() => {
    ask();
  }, []);

  return (
    <View style={styles.container}>
      <Topbar city={city} />
      <ScrollView
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.mainBox}
      >
        {days.length === 0 ? "" : <Main />}
      </ScrollView>
      <View style={styles.pagenation}>
        <View style={styles.circle} />
        <View style={styles.circle} />
        <View style={styles.circle} />
        <View style={styles.circle} />
        <View style={styles.circle} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E4D0FF",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingVertical: 10,
  },
  mainBox: {},
  pagenation: {
    paddingVertical: 10,
    justifyContent: "center",
    gap: 8,
    flexDirection: "row",
    width: "100%",
  },
  circle: {
    width: 8,
    height: 8,
    backgroundColor: "#161820",
    opacity: 0.2,
    borderRadius: 8,
  },
});
