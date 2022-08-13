import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { IdentIcon } from "../../assets/icons/iconUtils";
import { rem } from "../../global/rem";

export class MessageHeader extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <Image
          source={{ uri: "https://i0.hdslb.com/bfs/baselabs/92417d0ac583e5b9f69dabfe9212ab2e060cd30a.jpg" }}
          style={styles.avatar}
        />
        <View style={styles.user_wrapper}>
          <View style={styles.user_info}>
            <Text style={styles.nickname}>校园小助手Clay_ex</Text>
            <IdentIcon name={"developer"} />
            <IdentIcon name={"official"} />
          </View>
          <Text style={styles.username}>@gfhfhooABCD</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  user_wrapper: {
    marginLeft: 10,
  },
  user_info: {
    height: 30,
    flexDirection: "row",
    alignItems: "center",

  },
  nickname: {
    marginRight: 5,
    color: "#111111",
    fontSize: rem(14),
    fontWeight: "bold",
  },
  username: {
    fontSize: rem(11),
  },
})
