import React from "react";
import { StandardHeader } from "../components/tiny/StandardHeader";
import { Image, ScrollView, StyleSheet, Text, View, VirtualizedList } from "react-native";
import { rem } from "../global/rem";
import { IdentIcon } from "../assets/icons/iconUtils";
import { RectCard } from "../components/Cards";
import { MessageHeader } from "../components/tiny/MessageHeader";
import { Comment } from "../components/Comment";
import { MessageCard } from "../components/MessageCard";

export class MessageDetail extends React.Component {
  constructor(props) {
    super(props);

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

    const UpperContext = () => {
      return (
        <RectCard>
          <MessageHeader />
          <View style={styles.content}>
            <Text style={{ color: "#111", fontSize: rem(14) }}>
              梦天实验舱已完成出厂前所有研制工作，于近日运抵文昌航天发射场。后续，梦天实验舱将按计划开展发射场区各项总装和测试工作。
              "The key to sound relations between states lies in amity between the people." Chinese Construction
              enterprises has laid a solid foundation for cultural exchanges and people-to-people integration between
              #China and #Algeria.😂😂😂😂😂😂😂このヤロ、弾丸の地って、そんな不自分の勇気を使った？
            </Text>
          </View>
        </RectCard>
      );
    };


    return (
      <View>
        <StandardHeader title={"帖子详情"} />
        <VirtualizedList
          contentContainerStyle={{ paddingBottom: "10%" }}
          getItem={this.getItem}
          renderItem={({ item }) => this.renderItem(item)}
          getItemCount={() => {
            return 5;
          }}
          showsVerticalScrollIndicator={false}
          data={[
            <UpperContext />,
            <Comment />,
            <Comment />,
            <Comment />,
          ]}
          keyExtractor={item => item.key}
          onEndReachedThreshold={0.1}
        />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  content: {
    marginVertical: 10,
  },
});
