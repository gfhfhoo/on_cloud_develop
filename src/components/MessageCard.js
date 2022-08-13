import React from "react";
import { RoundCard } from "./Cards";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SvgXml } from "react-native-svg";
import { CommentSVG, ReTweetSVG } from "../assets/svg";
import { rem } from "../global/rem";
import { IdentIcon } from "../assets/icons/iconUtils";
import { MessageHeader } from "./tiny/MessageHeader";

export class MessageCard extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {

    const CommentBtn = ({ sum }) => {
      return (
        <Pressable style={styles.btn}>
          <SvgXml xml={CommentSVG} width={26} height={26} fill={"grey"} />
          <Text style={styles.btn_r_text}>100+</Text>
        </Pressable>
      );
    };

    const RetweetBtn = ({ sum }) => {
      return (
        <Pressable style={styles.btn}>
          <SvgXml xml={ReTweetSVG} width={32} height={32} fill={"grey"} />
          <Text style={styles.btn_r_text}>100+</Text>
        </Pressable>
      );
    };

    return (
      <View style={styles.container}>
        <RoundCard enableMargin width={"100%"}>
          <MessageHeader />
          <View style={styles.content}>
            <Text style={{ color: "#111", fontSize: rem(14) }}>
              梦天实验 梦天实验梦天实验 梦天实验梦天实验 梦天实验梦天实验 梦天实验梦天实验 梦天实验梦天实验 梦天实验
            </Text>
          </View>
          <View style={styles.func}>
            <RetweetBtn />
            <CommentBtn />
          </View>
        </RoundCard>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: "2%"
  },
  content: {
    marginTop: 10,
    marginBottom: 10,
    width: "100%",
  },
  func: {
    width: "95%",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  btn_r_text: {
    fontSize: rem(10),
    fontWeight: "bold",
  },
});
