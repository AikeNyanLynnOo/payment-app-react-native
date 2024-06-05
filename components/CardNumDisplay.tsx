import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CardNumDisplay = ({ cardNumStr }: { cardNumStr: string }) => {
  return (
    <View className="flex flex-row items-center mt-4">
      <Text className="mr-4 font-fcbold text-gray text-xl">
        {cardNumStr.slice(0, 4)}
      </Text>
      <Text className="mr-4 font-fcbold text-gray text-xl">
        {cardNumStr.slice(4, 8)}
      </Text>
      <Text className="mr-4 font-fcbold text-gray text-xl">
        {cardNumStr.slice(8, 12)}
      </Text>
      <Text className="font-fcregular text-gray text-xl">
        {cardNumStr.slice(12)}
      </Text>
    </View>
  );
};

export default CardNumDisplay;

const styles = StyleSheet.create({});
