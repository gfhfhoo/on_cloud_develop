import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { SvgXml } from "react-native-svg";
import { SearchSVG } from "../assets/svg";
import { rem } from "../global/rem";

export class SearchBar extends React.Component {
  render() {
    return (
      <View style={styles.search_container}>
        <View style={styles.search_box}>
          <SvgXml xml={SearchSVG} width={25} height={25} />
          <TextInput style={styles.input_box}
                     placeholder={"尝试搜些什么吧..."}
                     numberOfLines={1}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  search_container: {
    display: "flex",
    alignItems: "center",
    marginTop: 5,
    marginBottom: 10,
    width: "100%",
    height: 24,
  },
  search_box: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "70%",
    height: "100%",
    paddingHorizontal: 5,
    borderRadius: 10,
    backgroundColor: "rgba(205,205,205,0.4)",
  },
  input_box: {
    flex: 1,
    height: "80%",
    padding: 0,
    borderRadius: 10,
    color: "#111111",
    fontSize: rem(11),
    textAlign: "center",

  },

});
