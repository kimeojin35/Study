import React, { useEffect } from "react";
import * as Font from "expo-font";
import SplashScreen from "react-native-splash-screen";
import { StyleSheet, View, Text } from "react-native";
import { Asset } from "expo-asset";
import { Ionicons } from "@expo/vector-icons";
import Topbar from "./src/Topbar";
import Main from "./src/Main";

export default function App() {
  const preloadAssets = () => {
    const fontToLoad = [Ionicons.font];
    const fontPromises = fontToLoad.map((font) => Font.loadAsync(font));
  };
  // preloadAssets 은 앱 실행 로딩 중 신속하게 불러와야 하는 에셋을 정의

  const fetchFonts = () => {
    return Font.loadAsync({
      Pretendard: require("./assets/fonts/PretendardVariable.ttf"),
      "Pretendard-Light": require("./assets/fonts/Pretendard-Light.otf"),
      "Pretendard-Black": require("./assets/fonts/Pretendard-Black.otf"),
      "Pretendard-Bold": require("./assets/fonts/Pretendard-Bold.otf"),
      "Pretendard-ExtraBold": require("./assets/fonts/Pretendard-ExtraBold.otf"),
      "Pretendard-Thin": require("./assets/fonts/Pretendard-Thin.otf"),
      "Pretendard-ExtraLight": require("./assets/fonts/Pretendard-ExtraLight.otf"),
      "Pretendard-SemiBold": require("./assets/fonts/Pretendard-SemiBold.otf"),
      "Pretendard-Regular": require("./assets/fonts/Pretendard-Regular.otf"),
      "Pretendard-Medium": require("./assets/fonts/Pretendard-Medium.otf"),
    });
  };

  const preload = async () => {
    return (await preloadAssets()) && fetchFonts();
  };

  useEffect(() => {
    preload().then((context) => {
      SplashScreen.hide();
    });
  }, []);

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
  },
  dayBox: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 4,
  },
});
