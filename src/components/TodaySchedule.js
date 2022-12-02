import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { rem } from "../global/rem";
import { SubjectCard } from "./Cards";

export class TodaySchedule extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {

    const StartDot = () => {
      return (
        <View style={styles.circle20}>
          <View style={styles.circle10_sticky} />
        </View>
      );
    };

    const Dot = () => {
      return (
        <View style={styles.circle20_void}>
          <View style={styles.circle10_void} />
        </View>
      );
    };

    const TimeLine = ({ start, end, seq }) => {
      return (
        <View style={styles.timeline}>
          <View style={{ height: "100%", width: rem(45) }}>
            <Text style={styles.start}>{start}</Text>
            <Text style={styles.end}>{end}</Text>
          </View>
          <View>
            <View style={styles.circle_wrapper}>
              {seq === 0 ? <StartDot /> : <Dot />}
            </View>
            <View style={[styles.timeline_line, { opacity: seq === 1 ? 0 : 1 }]} />
          </View>
        </View>
      );
    };


    return (
      <View style={styles.container}>
        <View style={styles.subject_wrapper}>
          <TimeLine start={this.props.start} end={this.props.end} seq={this.props.seq} />
          <View style={styles.card_wrapper}>
            <SubjectCard color={"#8a8ef3"}>
              <View style={styles.info_container}>
                <Text numberOfLines={2} style={styles.subject_name}>{this.props.name}</Text>
                <View style={styles.subject_info}>
                  <Text style={styles.tiny}>任课老师：{this.props.teacher}</Text>
                  <Text style={styles.tiny}>教学地点：{this.props.address}</Text>
                </View>
              </View>
            </SubjectCard>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    // borderWidth: 1,
    // borderStyle: "solid",
    // borderColor: "black",
    overflow: "hidden",
  },
  subject_wrapper: {
    flexDirection: "row",
    width: "85%",
    height: 150,
    // borderWidth: 1,
    // borderStyle: "solid",
    // borderColor: "black",
  },
  card_wrapper: {
    flex: 1,
    height: "85%",
    transform: [{ translateY: 4 }],
    // alignSelf: "center",
    // borderWidth: 1,
    // borderStyle: "solid",
    // borderColor: "black",
  },
  timeline: {
    flexDirection: "row",
    height: "100%",
    // borderWidth: 1,
    // borderStyle: "solid",
    // borderColor: "black",
  },
  timeline_line: {
    height: "100%",
    width: 2,
    marginHorizontal: 20,
    backgroundColor: "#1CB5E0",
    borderRadius: 2,
  },
  start: {
    fontWeight: "bold",
    color: "#111",
    fontSize: rem(15),
    marginBottom: 5,
    // borderWidth: 1,
    // borderStyle: "solid",
    // borderColor: "black",
  },
  end: {
    fontSize: rem(12),
  },
  info_container: {
    width: "100%",
    height: "100%",
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  subject_name: {
    width: "70%",
    height: "50%",
    fontSize: rem(14),
    fontWeight: "bold",
    color: "#fff",
  },
  subject_info: {
    flex: 1,
    justifyContent: "flex-end",
  },
  tiny: {
    paddingTop: 1,
    paddingBottom: 1,
    fontSize: rem(10),
    color: "#fff",
  },
  circle_wrapper: {
    position: "absolute",
    top: 0,
    alignSelf: "center",
    // borderWidth: 1,
    // borderStyle: "solid",
    // borderColor: "black",
    zIndex: 2002,
  },
  circle20: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 4,
    borderColor: "#fff",
    backgroundColor: "#8a8ef3",
    alignItems: "center",
    justifyContent: "center",
  },
  circle10_sticky: {
    width: 12,
    height: 12,
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 6,
    backgroundColor: "#8a8ef3",
  },
  circle20_void: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  circle10_void: {
    width: 12,
    height: 12,
    borderWidth: 2,
    borderColor: "#8a8ef3",
    borderRadius: 6,
    backgroundColor: "#fff",
  },
});
