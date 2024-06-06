import { ActivityIndicator, Text, TouchableOpacity } from "react-native";
import React from "react";
import { ButtonPropType } from "@/types/PropTypes";
import { styles } from "@/constants";

const PrimaryButton = ({
  handlePress,
  btnText,
  disabled,
  isLoading,
  otherStyles,
}: ButtonPropType) => {
  return (
    <TouchableOpacity
      activeOpacity={disabled ? 1 : 0.2}
      className={`${
        disabled ? "bg-gray-200" : "bg-mint"
      } w-full mx-auto min-h-[45px] flex flex-row justify-center items-center rounded-full ${otherStyles}`}
      onPress={!disabled && !isLoading ? handlePress : () => {}}
    >
      <Text className="text-white font-fcbold text-xl">{btnText}</Text>
      {isLoading && (
        <ActivityIndicator
          animating={isLoading}
          color={styles.colors.primary}
          size="small"
          className="ml-2"
        />
      )}
    </TouchableOpacity>
  );
};

export default PrimaryButton;
