import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { BottomTab } from "./BottomTab";
import { Splash } from "../screens/Splash";
import { Login } from "../screens/Login";
import { Register } from "../screens/Register";
import { MessageDetail } from "../screens/MessageDetail";
import { QRScan } from "../screens/QRScan";

const Root = createStackNavigator();

export const RootNavigator = () => {
  return (
    <Root.Navigator
      screenOptions={{
        headerShown: false,
        lazy: true,
      }}
      initialRouteName={"BottomTab"}>
      <Root.Screen name={"Splash"} component={Splash} />
      <Root.Screen name={"Login"} component={Login} />
      <Root.Screen name={"Register"} component={Register} />
      <Root.Screen name={"BottomTab"} component={BottomTab} />
      <Root.Screen name={"MessageDetail"} component={MessageDetail} />
      <Root.Screen name={"QRScan"} component={QRScan} />
    </Root.Navigator>
  );
};
