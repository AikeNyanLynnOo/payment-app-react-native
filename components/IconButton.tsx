import {
  GestureResponderEvent,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { styles } from "../constants";
import { IconButtonPropType } from "@/types/PropTypes";

const IconButton = ({
  iconSource,
  handlePress,
  disabled,
  otherStyles,
  otherIconStyles,
}: IconButtonPropType) => {
  return (
    <TouchableOpacity
      className={`w-fit flex justify-center items-center ${otherStyles}`}
      onPress={handlePress}
    >
      <Image
        source={iconSource}
        resizeMode="contain"
        className={`h-[23px] w-[23px] ${otherIconStyles}`}
        tintColor={styles.colors.secondary.DEFAULT}
      />
    </TouchableOpacity>
  );
};

export default IconButton;
