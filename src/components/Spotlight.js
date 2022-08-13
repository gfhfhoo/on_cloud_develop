import React from "react";
import { Image, Text, StyleSheet, View } from "react-native";
import { SvgXml } from "react-native-svg";
import { TrendSVG } from "../assets/svg";
import { rem } from "../global/rem";


export class Spotlight extends React.Component {

  render() {

    const HotItem = ({ idx, title }) => {
      return (
        <View style={{ width: "50%" }}>
          <View style={styles.item_container}>
            <Text style={styles.trend_number}>{idx}</Text>
            <Text style={styles.trend_text} numberOfLines={1}>{title}</Text>
          </View>
        </View>
      );
    };

    return (
      <View style={styles.spotlight}>
        <View style={styles.header}>
          <SvgXml xml={TrendSVG} />
          <Text style={{ color: "black", marginLeft: 5 }}>天理人都在搜</Text>
        </View>
        <View style={styles.content}>
          <HotItem title={"榜一大哥牛牛榜一大哥牛牛"} idx={1} />
          <HotItem title={"榜一大哥牛牛"} idx={2} />
          <HotItem title={"榜一大哥牛牛"} idx={3} />
          <HotItem title={"榜一大哥牛牛"} idx={4} />
          <HotItem title={"榜一大哥牛牛"} idx={5} />
          <HotItem title={"榜一大哥牛牛"} idx={6} />
          <HotItem title={"榜一大哥牛牛"} idx={7} />
          <HotItem title={"榜一大哥牛牛榜一大哥牛牛"} idx={8} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  spotlight: {},
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    marginTop: 10,
    paddingLeft: "2%",
    paddingRight: "2%",
    height: rem(115),
    flexWrap: "wrap",
    // borderWidth: 1,
    // borderStyle: "solid",
    // borderColor: "black",
    // borderBottomWidth: 1,
    // borderStyle: "solid",
    // borderColor: "rgba(183,183,183,0.5)",
  },
  item_container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingRight: 10,
    marginVertical: 2,
    // borderWidth: 1,
    // borderStyle: "solid",
    // borderColor: "black",
  },
  trend_number: {
    marginRight: 10,
    fontSize: rem(18),
    fontStyle: "italic",
    fontWeight: "bold",
    color: "#dc475a",
    // borderWidth: 1,
    // borderStyle: "solid",
    // borderColor: "black",
  },
  trend_text: {
    color: "black",
    flexShrink: 1,
    // borderWidth: 1,
    // borderStyle: "solid",
    // borderColor: "black",
  },
});
