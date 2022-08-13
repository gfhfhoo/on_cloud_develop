import React from "react";
import { RootNavigator } from "./src/navigators/RootNavigator";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";

import QuickActions from "react-native-quick-actions";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "rgba(231,231,231,0.1)",
  },
};

const App = () => {

  QuickActions.setShortcutItems([
    {
      type: "Orders", // Required
      title: "扫一扫", // Optional, if empty, `type` will be used instead
      subtitle: "使用扫一扫，可以扫描二维码",
      icon: "qr_scan", // Icons instructions below
      userInfo: {
        url: "app://orders" // Provide any custom data like deep linking URL
      }
    },
    {
      type: "Orders", // Required
      title: "校园卡支付", // Optional, if empty, `type` will be used instead
      subtitle: "使用校园卡快捷支付",
      icon: "student_card", // Icons instructions below
      userInfo: {
        url: "app://orders" // Provide any custom data like deep linking URL
      }
    }
  ]);

  return (
    <NavigationContainer theme={theme}>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default App;
