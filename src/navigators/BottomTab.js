import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeNavigator } from "./HomeNavigator";
import { Image, StyleSheet, Text, TouchableOpacity, View, Pressable } from "react-native";
import { SvgXml } from "react-native-svg";
import { AvatarSVG, CoffeeSVG, HomeSVG, LayoutSVG, ScanSVG } from "../assets/svg";
import { rem } from "../global/rem";
import { MyInfo } from "../screens/MyInfo";
import { Timetable } from "../screens/Timetable";
import { MessageDetail } from "../screens/MessageDetail";
import { QRScan } from "../screens/QRScan";

const Tab = createBottomTabNavigator();

const tabIconPaths = {
  MainPage: HomeSVG,
  Schedule: LayoutSVG,
  Affair: CoffeeSVG,
  _qr_scan: ScanSVG,
  MyInfo: AvatarSVG,
};

const screenNameMap = {
  MainPage: "首页",
  Schedule: "课程表",
  _qr_scan: "QR扫描",
  Affair: "事务处理",
  MyInfo: "我在天理",
};

export const BottomTab = () => {

  const CustomTab = ({ state, descriptors, navigation }) => {

    const TabIcon = ({ name, size, color, ...props }) => {
      return (
        <View>
          <SvgXml xml={tabIconPaths[name]} width={size} height={size} fill={color} {...props} />
        </View>
      );
    };

    return (
      <View style={styles.tabBar}>
        {state.routes.map((route, idx) => {

          if (!(route.name in screenNameMap)) return;

          const label = screenNameMap[route.name];
          const isFocused = state.index === idx;

          const onPress = () => {

            if (route.name === "_qr_scan") {
              navigation.getParent().navigate({
                name: "QRScan",
              });
              // navigation.navigate({ name: "MyInfo", merge: true });
              return;
            }

            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate({ name: route.name, merge: true });
            }
          };

          const ScanQRCode = () => {
            return (
              <TouchableOpacity
                style={styles.btn}
                activeOpacity={1}
                accessibilityRole={"button"}
                onPress={onPress}
                key={Math.random().toFixed(10)}
              >
                <View style={styles.QR_wrapper}>
                  <View style={styles.QR_scan}>
                    <View style={{
                      alignItems: "center", justifyContent: "center", height: "100%",
                    }}>
                      <TabIcon name={route.name} size={48} color={"white"} />
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          };

          // 判断是否为QR code扫描

          if (route.name === "_qr_scan") {
            return ScanQRCode();
          }

          // 其他正常Tab

          return (
            <TouchableOpacity
              style={styles.btn}
              activeOpacity={1}
              accessibilityRole={"button"}
              onPress={onPress}
              key={Math.random().toFixed(10)}
            >
              <View style={{ alignItems: "center" }}>
                <TabIcon name={route.name} size={40} color={isFocused ? "#147be7" : "black"} />
                <Text style={{
                  fontSize: rem(11),
                  color: isFocused ? "#111111" : "grey",
                  fontWeight: isFocused ? "bold" : "normal",
                }}>
                  {label}
                </Text>
              </View>

            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <Tab.Navigator
      tabBar={props => <CustomTab {...props} />}
      screenOptions={{ headerShown: false }}
      initialRouteName={"MainPage"}
    >
      <Tab.Screen name={"MainPage"} component={HomeNavigator} />
      <Tab.Screen name={"Schedule"} component={Timetable} />
      <Tab.Screen name={"_qr_scan"} component={HomeNavigator} />
      <Tab.Screen name={"Affair"} component={HomeNavigator} />
      <Tab.Screen name={"MyInfo"} component={MyInfo} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    paddingBottom: 8,
  },
  btn: {
    flex: 1,
    alignItems: "center",
    // borderWidth: 1,
    // borderStyle: "solid",
    // borderColor: "black",
  },

  QR_wrapper: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    borderRadius: 30,
    top: "-80%",
    backgroundColor: "#ffffff",
  },
  QR_scan: {
    width: 48,
    height: 48,
    // top: "-120%",
    borderRadius: 24,
    backgroundColor: "#147be7",
  },
});
