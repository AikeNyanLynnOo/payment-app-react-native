import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { ButtonPropType } from "@/types/PropTypes";

const PrimaryButton = ({ handlePress, btnText }: ButtonPropType) => {
  return (
    <TouchableOpacity
      className="bg-mint w-full mx-auto min-h-[45px] flex justify-center items-center rounded-full"
      onPress={handlePress}
    >
      <Text className="text-white font-fcbold text-xl">{btnText}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
