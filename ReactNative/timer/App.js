import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import arrow1 from "./icons/arrow1";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text>냐냐</Text>
        <Text>냐냐</Text>
      </View>
      <View style={styles.main}></View>
      <View style={styles.bottomBar}>
        <View>
          <Text>타이머</Text>
        </View>
        <View>
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
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f00",
    width: "100%",
    height: "100%",
  },
  bottomBar: {
    width: "100%",
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
    flexDirection: "row",
  },
});
