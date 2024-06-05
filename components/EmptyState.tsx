import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { EmptyStatePropType } from "@/types/PropTypes";

const EmptyState = ({
  title,
  subtitle,
  icon,
  navigation,
}: EmptyStatePropType) => {
  return (
    <View className="flex justify-center items-center bg-primary h-[85vh] px-20">
      <Image
        source={icon}
        resizeMode="contain"
        className="h-[40px] w-[40px] mb-4 "
      />
      <Text className="mb-4 font-fcregular text-2xl text-center">{title}</Text>
      <Text className="mb-4 font-fcregular text-2xl text-center">
        {subtitle}
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Add New Card")}
        className="rounded-lg flex items-center justify-center px-5 py-3"
      >
        <Text className="font-fcregular text-mint text-2xl">Add New Card</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EmptyState;

const styles = StyleSheet.create({});
