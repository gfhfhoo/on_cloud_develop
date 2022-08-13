import React from "react";
import { RoundCard } from "./Cards";
import { StyleSheet, Text, View } from "react-native";
import { MessageHeader } from "./tiny/MessageHeader";
import { rem } from "../global/rem";
import { ReplyQuote } from "./tiny/ReplyQuote";

export class Comment extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <RoundCard enableMargin width={"100%"}>
          <View style={{ marginVertical: 4 }}>
            <Text style={styles.floor_idx}>#123</Text>
          </View>
          <MessageHeader />
          <View style={styles.content}>
            <ReplyQuote />
            <Text style={{ color: "#111", fontSize: rem(14) }}>
              reply here reply here
              reply herereply here reply here reply here reply here
            </Text>
          </View>
        </RoundCard>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: "2%",
  },
  content: {
    marginTop: 10,
    marginBottom: 10,
    width: "100%",
  },
  floor_idx: {
    fontSize: rem(10),
  },
});
