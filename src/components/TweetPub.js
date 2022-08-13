import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { SvgXml } from "react-native-svg";
import { AtSVG, PictureSVG, PublishSVG } from "../assets/svg";
import { rem } from "../global/rem";

class FunctionBtn extends React.Component {
  render() {
    return (
      <View style={{ marginRight: 10 }}>
        {this.props.children}
      </View>
    );
  }
}

export class TweetPub extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      canSend: false,
    };
  }

  render() {

    return (
      <View style={styles.tweet_container}>
        <View style={styles.input_box}>
          <TextInput
            placeholder={"寻找你的身边事..."}
            multiline={true}
            maxLength={1000}
            onChangeText={text => {
              this.setState({
                text: text,
                canSend: text.length !== 0,
              });
            }}
          />
        </View>
        <View style={styles.func_box}>
          <View style={styles.func_btn_group}>
            <FunctionBtn>
              <SvgXml xml={PictureSVG} width={40} height={40} fill={"grey"} />
            </FunctionBtn>
            <FunctionBtn>
              <SvgXml xml={AtSVG} width={25} height={25} fill={"grey"} />
            </FunctionBtn>
          </View>
          <View style={styles.pub_btn}>
            <SvgXml xml={PublishSVG} width={30} height={30} fill={"#fff"} />
            <Text style={[styles.pub_text, { color: "#fff" }]}>发布</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tweet_container: {
    // width: "100%",
  },
  input_box: {
    width: "100%",
    height: 120,
    borderRadius: 14,
    paddingHorizontal: 8,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "rgba(229,229,229,0.96)",
  },
  func_box: {
    width: "100%",
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  func_btn_group: {
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
  },
  pub_btn: {
    width: "20%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 4,
    paddingHorizontal: 5,
    borderRadius: 10,
    backgroundColor: "#147be7",
  },
  pub_text: {
    flex: 1,
    textAlign: "center",
    fontSize: rem(13),
    fontWeight: "bold",
    // borderWidth: 1,
    // borderStyle: "solid",
    // borderColor: "black",
  },
});
