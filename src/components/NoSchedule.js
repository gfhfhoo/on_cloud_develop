import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Lottie from "lottie-react-native";
import { rem } from "../global/rem";

export class NoSchedule extends React.Component {

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.lottie_wrapper}>
          <Lottie source={require("../assets/lf30_editor_wcfvnmdi.json")}
                  autoPlay
                  loop
                  style={styles.animate}
          />
        </View>
        <Text style={styles.tip}>今天是个好日子，与你的小伙伴出去游玩吧！</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    // borderWidth: 1,
    // borderStyle: "solid",
    // borderColor: "black",
  },
  lottie_wrapper: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: "hidden",
  },
  animate: {
    width: 200,
    height: 200,
  },
  tip: {
    marginTop: 15,
    fontSize: rem(11),
  },
});
