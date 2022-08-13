import React from "react";
import { RectCard } from "../components/Cards";
import { TweetPub } from "../components/TweetPub";
import { View, VirtualizedList } from "react-native";
import { MessageCard } from "../components/MessageCard";

export const Rumors = () => {

  const getItem = (data, index) => {
    return {
      key: Math.random().toString(12).substring(0),
      component: data[index],
    };
  };

  const renderItem = (item: Object) => {
    return item.component;
  };



  return (
    <View style={{ height: "100%", }}>
      <VirtualizedList
        contentContainerStyle={{ paddingBottom: "10%" }}
        showsVerticalScrollIndicator={false}
        data={[
          <RectCard>
            <TweetPub />
          </RectCard>,
          <MessageCard />,
          <MessageCard />,
          <MessageCard />,
        ]}
        getItemCount={() => {
          return 5;
        }}
        getItem={getItem}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={item => item.key}
        onEndReachedThreshold={0.1}
      />
    </View>
  );
};
