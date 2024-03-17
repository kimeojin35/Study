import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import Main from "./src/Main";
import { Menu, Search } from "./src/svg";

const SCREEN_WIDTH = Dimensions.get("window").width;
const API_KEY = "0aa1cf0736228f407e5b0914333a4b37";

export default function App() {
  const [city, setCity] = useState("Loading...");
  const [days, setDays] = useState([]);
  const [ok, setOk] = useState(true);
  const getWeather = async () => {
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
    setDays(
      json.list.filter((weather) => {
        if (weather.dt_txt.includes("00:00:00")) {
          return weather;
        }
      })
    );
  };
  useEffect(() => {
    getWeather();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Menu />
        <View style={styles.tmp} />
        <Text style={styles.header}>{city}</Text>
        <View style={styles.tmp} />
        <Search />
      </View>
      <ScrollView
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.mainBox}
      >
        {days.length === 0 ? (
          <View style={styles.day}>
            <ActivityIndicator color="white" size="large" />
          </View>
        ) : (
          days.map((day, index) => (
            <Main
              key={index}
              description={day.weather[0].main}
              temp={parseFloat(day.main.temp).toFixed(1)}
              emoji={day.weather[0].description}
            />
          ))
        )}
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
    backgroundColor: "#04D0FF",
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

  // Topbar
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

  // 임시
  day: {
    width: SCREEN_WIDTH,
    alignItems: "center",
    justifyContent: "center",
  },
});
