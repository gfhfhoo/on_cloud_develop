import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { rem } from "../../global/rem";

export class StandardHeader extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.text}>{this.props.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingTop: 10,
    paddingBottom: 10,
  },
  text: {
    fontSize: rem(18),
    color: "#111",
    fontWeight: "bold",
  },
});
