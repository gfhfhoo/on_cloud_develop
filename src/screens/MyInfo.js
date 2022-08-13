import React from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { rem } from "../global/rem";
import { SvgXml } from "react-native-svg";
import {
  CardSVG,
  FemaleIconSVG,
  GradeSVG,
  HonorSVG,
  IDCardSVG,
  MaleIconSVG,
} from "../assets/svg";
import LinearGradient from "react-native-linear-gradient";
import { RoundCard, RoundCardWithIcon } from "../components/Cards";

import { Animated } from "react-native";
import { JuicyOrange, Meadow, ObsidianBlack } from "../assets/gradients";
import { getNewestScore } from "../api/api";

export class MyInfo extends React.Component {

  constructor(props) {
    super(props);
    this.honorMapping = {
      developer: { icon: require("../assets/icons/developer.png"), props: { width: 50, height: 50 } },
      official: { icon: require("../assets/icons/official.png"), props: { width: 50, height: 50 } },
      volunteer: { icon: require("../assets/icons/heart.png"), props: { width: 50, height: 50 } },
    };
    this.state = {
      weightedScore: "-.-"
    }
  }

  async componentDidMount() {
    const res = await getNewestScore();
    this.setState({
      weightedScore: res.weightedScore
    })
  }


  render() {

    const BasicInfo = () => {
      return (
        <View style={styles.basic_info_container}>
          <View style={styles.basic_info_content}>
            <Text style={{ fontSize: rem(11) }}>专业</Text>
            <View style={{ flex: 1, justifyContent: "center" }}>
              <Text style={styles.basic_info_desc}>计算机与科学技术</Text>
            </View>
          </View>
          <View style={[styles.basic_info_content, styles.basic_info_margin]}>
            <Text style={{ fontSize: rem(11) }}>年级</Text>
            <View style={{ flex: 1, justifyContent: "center" }}>
              <Text style={[styles.basic_info_desc, styles.basic_info_Grade]}>大一</Text>
            </View>
          </View>
          <View style={styles.basic_info_content}>
            <Text style={{ fontSize: rem(11) }}>上学期平均绩点</Text>
            <View style={{ flex: 1, justifyContent: "center" }}>
              <Text style={[styles.basic_info_desc, styles.basic_info_GPA]}>{this.state.weightedScore}</Text>
            </View>
          </View>
        </View>
      );
    };

    const FuncEntry = () => {

      const SVGWrapper = ({ obj, background }) => {
        return (
          <View style={[styles.svg_wrapper, { backgroundColor: background }]}>
            {obj}
          </View>
        );
      };

      return (
        <View style={styles.entry_container}>
          <Pressable style={{ flex: 1 }}>
            <View style={styles.entry_content}>
              <SVGWrapper obj={<SvgXml xml={GradeSVG} width={40} height={40} />} background={"#EF6514"} />
              <Text style={styles.entry_desc}>我的成绩</Text>
            </View>
          </Pressable>
          <Pressable style={{ flex: 1 }}>
            <View style={styles.entry_content}>
              <SVGWrapper obj={<SvgXml xml={CardSVG} width={40} height={40} />} background={"#EF6514"} />
              <Text style={styles.entry_desc}>我的校园卡</Text>
            </View>
          </Pressable>
          <Pressable style={{ flex: 1 }}>
            <View style={styles.entry_content}>
              <SVGWrapper obj={<SvgXml xml={GradeSVG} width={40} height={40} />} background={"#EF6514"} />
              <Text style={styles.entry_desc}>我的绩点</Text>
            </View>
          </Pressable>
        </View>
      );
    };

    const DetailInfo = () => {
      return (
        <View></View>
      );
    };

    const IndentValidation = () => {

      const Icon = () => {
        return (
          <SvgXml xml={IDCardSVG} width={40} height={40} fill={"#111"} />
        );
      };

      const Entry = ({ gradient, title }) => {
        return (
          <LinearGradient style={[styles.vali_entry_btn]} {...gradient}>
            <Pressable>
              <Text style={{ color: "#fff", fontSize: rem(13), textAlign: "center", fontWeight: "bold" }}>{title}</Text>
            </Pressable>
          </LinearGradient>
        );
      };

      return (
        <RoundCardWithIcon title={"身份认证"} icon={Icon()} fontSize={rem(15)} enableMargin>
          <View style={styles.vali_entry}>
            <Entry title={"校内干部入口"} gradient={JuicyOrange} />
            <Entry title={"志愿者入口"} gradient={Meadow} />
            <Entry title={"开发者入口"} gradient={ObsidianBlack} />
          </View>
        </RoundCardWithIcon>
      );
    };

    const MyHonor = () => {
      const Icon = () => {
        return (
          <SvgXml xml={HonorSVG} width={40} height={40} fill={"#111"} />
        );
      };

      const HonorItem = ({ honor, name }) => {
        return (
          <Pressable style={{ alignItems: "center", width: "33%", marginBottom: 10 }}>
            <Image source={honor.icon} style={honor.props} />
            <Text style={styles.honor_name}>{name}</Text>
          </Pressable>
        );
      };

      return (
        <RoundCardWithIcon title={"我的荣誉"} icon={Icon()} fontSize={rem(15)} enableMargin>
          <View style={styles.honor_container}>
            <HonorItem honor={this.honorMapping.developer} name={"本App开发者"} />
            <HonorItem honor={this.honorMapping.official} name={"SPCI113中心成员"} />
            <HonorItem honor={this.honorMapping.volunteer} name={"2022年校级优秀志愿者"} />
            <HonorItem honor={this.honorMapping.volunteer} name={"2021年校级优秀志愿者"} />
            <HonorItem honor={this.honorMapping.volunteer} name={"2020年校级优秀志愿者"} />
          </View>
        </RoundCardWithIcon>
      );
    };

    const Backdrop = () => {

      const angle = new Animated.Value(0);

      Animated.loop(Animated.timing(angle, {
        toValue: 1,
        duration: 10000,
        useNativeDriver: false,
      }), {
        iterations: -1,
        resetBeforeIteration: true,
      }).start();

      const spin = angle.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "360deg"],
      });


      return (
        <View style={styles.backdrop_wrapper}>
          <Animated.View style={[styles.backdrop, { transform: [{ rotate: spin }] }]}>
            <LinearGradient colors={["#000851", "#00337c", "#005da3", "#0089c4", "#1cb5e0"]}
                            style={[styles.backdrop]}
                            start={{ x: 0.3, y: 0.6 }} />
          </Animated.View>
        </View>
      );
    };

    const SexIcon = ({ sex }) => {
      return (
        <View style={[styles.sex_icon, { backgroundColor: sex === 0 ? "#147BE7" : "#e887aa" }]}>
          <SvgXml xml={sex === 0 ? MaleIconSVG : FemaleIconSVG} width={18} height={18} />
        </View>
      );
    };

    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <Backdrop />
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.avatar}>
              <SexIcon sex={0} />
              <Image
                style={styles.avatar}
                source={{ uri: "https://i0.hdslb.com/bfs/baselabs/92417d0ac583e5b9f69dabfe9212ab2e060cd30a.jpg" }} />
            </View>
            <View style={styles.outline}>
              <Text style={{ fontSize: rem(15), color: "#fff", fontWeight: "bold" }}>欢迎回来，Clay_ex！</Text>
              <Text style={styles.gossip}>在这里开启你的天理生活吧</Text>
            </View>
          </View>
          <RoundCard enableMargin>
            <BasicInfo />
          </RoundCard>
          <RoundCard enableMargin>
            <FuncEntry />
          </RoundCard>
          <RoundCard enableMargin>
            <DetailInfo />
          </RoundCard>
          <IndentValidation />
          <MyHonor />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: "100%",
    paddingBottom: "10%",
    paddingTop: "10%",
    // backgroundColor: "rgba(231,231,231,0.2)",

  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  outline: {
    marginLeft: 20,
  },
  gossip: {
    fontSize: rem(10),
    marginVertical: 4,
    color: "rgba(255,255,255,0.8)",
  },
  backdrop_wrapper: {
    position: "absolute",
    alignSelf: "center",
    width: 800,
    height: 800,
    transform: [{translateY: -600}],
    // bottom: "72%",
    overflow: "hidden",
  },
  backdrop: {
    width: 800,
    height: 800,
    borderRadius: 400,
  },
  basic_info_container: {
    flexDirection: "row",
    height: 70,
  },
  basic_info_content: {
    flex: 1,
    alignItems: "center",
    height: "100%",
  },
  basic_info_margin: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(183,183,183,0.2)",
  },
  basic_info_desc: {
    flexWrap: "wrap",
    textAlign: "center",
    marginTop: 5,
    paddingHorizontal: 5,
    fontSize: rem(14),
    color: "#111111",
  },
  basic_info_Grade: {
    fontSize: rem(18),
  },
  basic_info_GPA: {
    fontSize: rem(25),
    fontWeight: "700",
  },
  entry_container: {
    flexDirection: "row",
    marginVertical: 5,
  },
  entry_content: {
    alignItems: "center",
  },
  entry_desc: {
    marginTop: 10,
    fontSize: rem(12),
    color: "#111111",
  },
  svg_wrapper: {
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  sex_icon: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2022,
    width: 20,
    height: 20,
    borderRadius: 10,
    bottom: -5,
    right: -5,
  },
  vali_header: {
    width: "100%",
  },
  vali_entry: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
  },
  vali_entry_btn: {
    width: "45%",
    padding: 10,
    borderRadius: 15,
    marginBottom: 10,
  },
  honor_container: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
  },
  honor_name: {
    marginTop: 5,
    textAlign: "center",
    color: "#111",
    // fontWeight: "bold",
  },
});
