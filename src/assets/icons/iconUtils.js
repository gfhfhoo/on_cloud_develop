import { Image } from "react-native";
import React from "react";

export const honorMapping = {
  developer: { icon: require("../icons/developer.png"), props: { width: 20, height: 20 } },
  official: { icon: require("../icons/official.png"), props: { width: 20, height: 20 } },
};

export const IdentIcon = ({ name }) => {
  return (
    <Image source={honorMapping[name].icon}
           style={[
             honorMapping[name].props,
             { marginLeft: 5 },
           ]} />
  );
};
