import React from "react";
import { StyleSheet, Text, View } from "react-native";

export class ReplyQuote extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.reply_tip}>回复 #123 -- @gfhfhoo:</Text>
        <Text style={styles.content} numberOfLines={3}>
          reply here reply here
          reply herereply here reply here reply here reply here
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 10,
    paddingLeft: 5,
    borderLeftWidth: 4,
    borderColor: "grey",
  },
  reply_tip: {
    marginVertical: 5
  },
  content: {
    marginVertical: 5,
    width: "100%",
  },
});

