import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { rem } from "../global/rem";
import LinearGradient from "react-native-linear-gradient";

export class RectCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[styles.rect_card, { marginTop: this.props.enableMargin ? 20 : 0 }]}>
        {this.props.children}
      </View>
    );
  }
}

export class RectCardWithTitle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[styles.rect_card, { marginTop: this.props.enableMargin ? 20 : 0 }]}>
        <View style={styles.header}>
          <LinearGradient colors={["rgb(0,210,255)", "rgb(58,71,213)"]} style={styles.rect_icon} />
          <LinearGradient colors={["rgb(0,210,255)", "rgb(58,71,213)"]} style={styles.rect_icon} />
          <Text style={[styles.header_title,{fontSize: this.props.fontSize || rem(17)}]}>{this.props.title}</Text>
        </View>
        {this.props.children}
      </View>
    );
  }
}

export class RoundCardWithIcon extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[
        styles.round_card,
        { width: this.props.width || "90%" },
        { marginTop: this.props.enableMargin ? 20 : 0 }
      ]}>
        <View style={styles.header}>
          {this.props.icon}
          <Text style={[styles.header_title,{fontSize: this.props.fontSize || rem(17)}]}>{this.props.title}</Text>
        </View>
        {this.props.children}
      </View>
    );
  }
}

export class RoundCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[
        styles.round_card,
        { width: this.props.width || "90%" },
        { marginTop: this.props.enableMargin ? 20 : 0 },
      ]}>
        {this.props.children}
      </View>
    );
  }
}

export class SubjectCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[styles.subject_card, { backgroundColor: this.props.color }]}>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rect_card: {
    width: "100%",
    backgroundColor: "#ffffff",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 12,
    paddingRight: 12,
    // borderWidth: 1,
    // borderStyle: "solid",
    // borderColor: "black",
  },
  round_card: {
    backgroundColor: "#ffffff",
    padding: 10,
    borderRadius: 10,
  },
  subject_card: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 10,
    borderRadius: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginTop: 5,
    marginBottom: 5,
  },
  header_title: {
    fontWeight: "bold",
    color: "#111111",
    marginLeft: 8,
  },
  rect_icon: {
    width: 2,
    height: 20,
    marginRight: 2,
  },
});
