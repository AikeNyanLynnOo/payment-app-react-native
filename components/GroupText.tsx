import { StyleSheet, Text, View } from "react-native";
import React from "react";

const GroupText = ({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) => {
  return (
    <View className="flex justify-between gap-y-2">
      <Text className="text-xs font-fcregular text-gray-200">{title}</Text>
      <Text className="text-sm font-fcregular text-secondary">{subTitle}</Text>
    </View>
  );
};

export default GroupText;
