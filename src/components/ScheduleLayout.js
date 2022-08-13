import React from "react";
import { StyleSheet, VirtualizedList } from "react-native";
import { TodaySchedule } from "./TodaySchedule";
import { NoSchedule } from "./NoSchedule";
import { classSeq } from "../global/class_seq";

export class ScheduleLayout extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      arr: this.props.arr,
      today: this.props.today,
      filtered: [],
    };
  }

  componentDidMount() {
    const time = new Date(this.state.today);
    const res = this.state.arr.filter(value => {
      let bool = false;
      value["day"].forEach(day => {
        if (time.toDateString() === new Date(day).toDateString()) {
          bool = true;
        }
      });

      return bool;
    });

    // console.log(res);

    let arr = [];

    res.forEach(value => {
      const idx_st = value["range"][0];
      const idx_ed = value["range"][1];
      arr.push({
        name: value["name"],
        teacher: value["teacher"],
        address: value["address"],
        start: classSeq[idx_st - 1][0],
        end: classSeq[idx_ed - 1][1],
      });
    });

    // sort

    arr = arr.sort((a, b) => {
      const date = new Date();
      const aa = a["start"].split(":");
      const bb = b["start"].split(":");
      return date.setHours(aa[0], aa[1]) < date.setHours(bb[0], bb[1]);
    });

    this.setState({
      filtered: arr,
    });
  }


  getItem = (data, index) => {
    return {
      key: Math.random().toString(12).substring(0),
      component: data[index],
    };
  };

  renderItem = (item: Object) => {
    return item.component;
  };

  render() {

    if (this.state.filtered.length === 0) return [<NoSchedule />];

    const fn = () => {
      const arr = [];
      this.state.filtered.forEach((value, index) => {
        let seq = -1;
        if (index === 0) seq = 0;
        if (index === this.state.filtered.length - 1 && this.state.filtered.length !== 1) seq = 1;
        arr.push(<TodaySchedule key={index} seq={seq}  {...value} />);
      });
      return arr;
    };

    return (
      <VirtualizedList
        style={styles.layout}
        data={fn()}
        getItem={this.getItem}
        renderItem={({ item }) => this.renderItem(item)}
        getItemCount={() => {
          return 4;
        }}
        showsVerticalScrollIndicator={false}
      />
    );
  }
}

const styles = StyleSheet.create({
  layout: {
    height: "100%",
    width: "100%",
    backgroundColor: "#fff",
    paddingTop: 10,
  },
});
