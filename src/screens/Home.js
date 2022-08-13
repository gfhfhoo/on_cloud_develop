import React from "react";
import { RefreshControl, Text, View, VirtualizedList } from "react-native";

import { Spotlight } from "../components/Spotlight";
import { SearchBar } from "../components/SearchBar";
import { RectCard } from "../components/Cards";
import { NewbieEntry } from "../components/misc/NewbieEntry";
import { AffairShowCase } from "../components/misc/AffairShowCase";
export class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
    };
  }

  refreshComponent = () => {
    return (
      <RefreshControl refreshing={this.state.refreshing}
                      onRefresh={null} />
    );
  };

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

    const Header = () => {
      return (
        <RectCard>
          <SearchBar />
          <Spotlight />
        </RectCard>
      );
    };

    return (
      <View>
        <VirtualizedList
          showsVerticalScrollIndicator={false}
          refreshing={this.state.refreshing}
          refreshControl={this.refreshComponent()}
          onEndReachedThreshold={0.1}
          onEndReached={null}
          data={[<Header />, <NewbieEntry />, <AffairShowCase />]}
          getItemCount={() => {
            return 3;
          }}
          getItem={this.getItem}
          renderItem={({ item }) => this.renderItem(item)}
          keyExtractor={item => item.key}
          style={{ height: "100%" }}
        />

      </View>
    );
  }
};
