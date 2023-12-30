import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Add, LeftArrow, More } from "./src/res";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <LeftArrow />
        <View style={styles.topBarBox}>
          <Add />
          <More />
        </View>
      </View>
      <View style={styles.main}></View>
      <View style={styles.bottomBar}>
        <View style={styles.bottomBarBox}>
          <Text style={}>타이머</Text>
        </View>
        <View style={styles.bottomBarBox}>
          <Text>메트로놈</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingBottom: 24,
    paddingTop: 24,
  },
  topBar: {
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 8,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 8,
    height: 48,
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#ff0",
  },
  topBarBox: {
    flexDirection: "row",
    gap: 12,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
    padding: [40, 0],
  },
  bottomBar: {
    width: "100%",
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
    flexDirection: "row",
    padding: [10, 4],
  },
  bottomBarBox: {
    padding: [8, 20],
  },
  
});
