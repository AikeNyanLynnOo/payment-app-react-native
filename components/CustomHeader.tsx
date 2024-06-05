import { StyleSheet, Text, View } from "react-native";
import React from "react";
import IconButton from "./IconButton";
import { icons } from "../constants";
import { NavigationProp } from "@react-navigation/native";
import { HeaderPropType } from "../types/PropTypes";

const CustomHeader = ({
  navigation,
  title,
  canGoBack,
  canAddNew,
}: HeaderPropType) => {
  return (
    <View className="flex flex-row w-full justify-between px-5 py-5 bg-primary">
      {/* Back Button */}
      <IconButton
        iconSource={icons.back}
        handlePress={navigation.goBack}
        otherIconStyles="h-4 w-4"
      />
      {/* Header Title */}
      {title && (
        <Text className="text-secondary font-fcbold text-2xl">{title}</Text>
      )}

      {/* Add Button */}
      {canAddNew && (
        <IconButton
          iconSource={icons.add}
          handlePress={navigation.goBack}
          otherIconStyles="h-4 w-4"
        />
      )}
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({});
