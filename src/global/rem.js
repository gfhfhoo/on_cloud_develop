import {
  Dimensions,
} from "react-native";


const { width, height } = Dimensions.get("window");
const ScreenWidth = Math.min(width, 540);


export function rem(num, designWidth = 375) {
  return num * ScreenWidth / designWidth;
}
