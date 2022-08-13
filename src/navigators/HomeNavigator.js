import React, { useEffect, useState } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Home } from "../screens/Home";
import { Rumors } from "../screens/Rumors";
import { Animated, Image, StyleSheet, Text, View } from "react-native";
import { ScreenLink } from "../components/ScreenLink";
import { rem } from "../global/rem";
import { useWatch } from "../utils/utils";

const Slide = createMaterialTopTabNavigator();

export const HomeNavigator = () => {

  const Button = ({ state, title, screen }) => {

    const fontSize = new Animated.Value(rem(18));
    const [fontWeight, setFontWeight] = useState("normal");
    const [fontColor, setFontColor] = useState("grey");

    useWatch(state, () => {
      const bool = state.routes[state.index].name === screen;
      const updatedFontSize = bool ? rem(18) : rem(14);

      setFontWeight(bool ? "bold" : "normal");
      setFontColor(bool ? "#f3630d" : "grey");

      Animated.timing(fontSize, {
        toValue: updatedFontSize,
        duration: 80,
        useNativeDriver: false,
      }).start(result => {
        if (result.finished) fontSize.setValue(updatedFontSize);
      });
    });

    return (
      <Text style={{ marginLeft: 5, marginRight: 5 }}>
        <ScreenLink to={"/" + screen}>
          <Animated.Text style={
            [styles.header_btn_text, { color: fontColor, fontSize: fontSize, fontWeight: fontWeight }]}>
            {title}
          </Animated.Text>
        </ScreenLink>
      </Text>
    );
  };

  const Header = ({ state }) => {

    return (
      <View style={styles.header}>
        <Image
          style={styles.avatar}
          source={{ uri: "https://i0.hdslb.com/bfs/baselabs/92417d0ac583e5b9f69dabfe9212ab2e060cd30a.jpg" }} />
        <View style={styles.header_right}>
          <View style={styles.header_btn_group}>
            <Button state={state} title={"新鲜事"} screen={"Home"} />
            <Button state={state} title={"云上圈"} screen={"Rumors"} />
          </View>
        </View>
      </View>
    );
  };

  return (
    <Slide.Navigator
      screenOptions={{ lazy: true }}
      tabBar={props => <Header {...props} />}
      initialRouteName={"Home"}
    >
      <Slide.Screen name={"Home"} component={Home} />
      <Slide.Screen name={"Rumors"} component={Rumors} />
    </Slide.Navigator>
  );
};

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: "8%",
    paddingHorizontal:45,
    paddingVertical: 7,
    backgroundColor: "#fff"
    // borderWidth: 1,
    // borderStyle: "solid",
    // borderColor: "black",
  },
  avatar: {
    position: "absolute",
    left: 10,
    display: "flex",
    alignItems: "center",
    width: 35,
    height: 35,
    borderRadius: 17.5,
    // borderWidth: 1,
    // borderStyle: "solid",
    // borderColor: "black",
  },
  header_right: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
  },
  header_btn_group: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  header_btn_text: {
    color: "black",
    fontSize: rem(17),
  },
});
