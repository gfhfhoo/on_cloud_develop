import { useLinkProps } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity } from "react-native";

export const ScreenLink = ({ allowEvent, to, action, children, CustomOpacity, ...rest }) => {

  let opacity = 1;

  if (allowEvent == null) allowEvent = true;
  if (CustomOpacity) opacity = CustomOpacity;

  const { onPress, ...props } = useLinkProps({ to, action });

  return (
    <TouchableOpacity onPress={allowEvent ? onPress : null}
                      activeOpacity={opacity}
                      {...props} {...rest}>
      {children}
    </TouchableOpacity>
  );
};
