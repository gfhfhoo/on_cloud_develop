import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { rem } from "../global/rem";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { ScheduleLayout } from "../components/ScheduleLayout";
import { getTimetable, getTimetableBy } from "../api/api";
import { Login } from "./Login";
import { Loading } from "../components/Loading";

const dayArray = ["日", "一", "二", "三", "四", "五", "六"];

const Time = createMaterialTopTabNavigator();

export class Timetable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [],
      days: [],
      header_calender: [],
      touchedDay: new Date(),
    };
  }

  async componentDidMount() {
    const res = await getTimetableBy();
    this.setState({
      arr: res["class"],
      days: res["days"],
    });
  }


  render() {

    const Calender = () => {

      const Block = ({ timeStr, screen }) => {

        const time = new Date(timeStr);

        const isSelected = this.state.touchedDay.toDateString() === time.toDateString();

        return (
          <Pressable onPress={() => {
            this.setState({
              touchedDay: new Date(time),
            });
            this.props.navigation.navigate(screen);
          }}>
            <View style={[styles.calender_block, isSelected ? styles.block_selected : {}]}>
              <Text
                style={[styles.calender_text, isSelected ? styles.text_selected : {}]}>{dayArray[time.getDay()]}</Text>
              <Text style={[styles.calender_text, isSelected ? styles.text_selected : {}]}>{time.getDate()}</Text>
            </View>
          </Pressable>
        );
      };

      return (
        <View style={styles.calender_container}>
          {
            this.state.days.map((value, index) => {
              return <Block timeStr={value} screen={"timetable" + index} />;
            })
          }
        </View>
      );
    };

    const Header = () => {
      return (
        <View style={styles.header}>
          <View style={{ alignItems: "center", paddingLeft: 45, paddingRight: 45 }}>
            <Text style={styles.header_week}>第10周</Text>
            {/*<Text style={styles.header_today_sum}>今天有 2 节课</Text>*/}
          </View>
          <Calender />
        </View>
      );
    };

    if (this.state.days.length === 0) {
      // loading...
      return <Loading />;
    }

    return (
      <Time.Navigator
        tabBar={props => <Header {...props} />}
        initialRouteName={"0"}
      >
        {
          this.state.days.map((item, idx) => {
            return (
              <Time.Screen key={idx}
                           name={"timetable" + idx}
              >
                {
                  (props) =>
                    <ScheduleLayout arr={this.state.arr}
                                    today={this.state.days[idx]}
                                    {...props}
                    />
                }
              </Time.Screen>
            );
          })
        }
      </Time.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 7,
    backgroundColor: "#fff",
  },
  header_week: {
    color: "#111111",
    fontSize: rem(20),
    fontWeight: "bold",
  },
  header_today_sum: {
    fontSize: rem(10),
  },
  calender_container: {
    flexDirection: "row",
    marginTop: 15,
    marginBottom: 10,
    // paddingLeft: 10,
    // paddingRight: 10,
    width: "85%",
    justifyContent: "space-between",
  },
  calender_block: {
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: "#eff2f5",
    borderRadius: 8,
  },
  block_selected: {
    backgroundColor: "#4176e1",
  },
  calender_text: {
    color: "grey",
  },
  text_selected: {
    color: "#fff",
    fontWeight: "bold",
  },
});
