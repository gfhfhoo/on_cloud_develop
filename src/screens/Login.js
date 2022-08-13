import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { rem } from "../global/rem";

export class Login extends React.Component {
  render() {

    const UsernameInput = () => {
      return (
        <View style={styles.input_box}>
          <TextInput style={styles.input} placeholder={"用户名"} />
        </View>
      );
    };

    const PasswordInput = () => {
      return (
        <View style={styles.input_box}>
          <TextInput style={styles.input} placeholder={"密码"} />
        </View>
      );
    };

    return (
      <View style={styles.screen}>
        <View style={styles.vali_container}>
          <UsernameInput />
          <PasswordInput />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(231,231,231,0.4)",
    alignItems: "center",
  },
  vali_container: {
    width: "80%",
    alignItems: "center",
  },
  input_box: {
    width: "80%",
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 100,
    marginBottom: 12
  },
  input: {
    paddingHorizontal: 20,
    fontSize: rem(12)
  }
});
