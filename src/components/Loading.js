import React from "react";
import { StyleSheet, View } from "react-native";
import Lottie from "lottie-react-native";

export class Loading extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Lottie source={require("../assets/97930-loading.json")} autoPlay loop/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
