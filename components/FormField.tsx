import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

import { icons, styles } from "../constants";
import { FormFieldPropType } from "@/types/PropTypes";

const FormField = ({
  title,
  value,
  type = "text",
  placeholder,
  handleChangeText,
  EndControl = () => <></>,
  helperText,
  otherStyles,
  ...props
}: FormFieldPropType) => {
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-secondary font-fcbold">{title}</Text>

      <View className="w-full h-14 px-3 bg-primary rounded-md border border-gray-300 focus:border-gray-200 flex flex-row items-center">
        <TextInput
          className="flex-1 text-secondary font-fcregular text-xl h-full"
          value={value}
          autoCapitalize="none"
          placeholder={placeholder || "Pleaes enter input"}
          placeholderTextColor={styles.colors.gray[100]}
          onChangeText={handleChangeText}
          {...props}
        />
        <EndControl />
      </View>
      {helperText && <Text className="text-sm font-fcbold text-gray-200">{helperText}</Text>}
    </View>
  );
};

export default FormField;
