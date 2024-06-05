import { StyleSheet, Text, View } from "react-native";
import React from "react";

const LandingText = () => {
  return (
    <View className="-mt-20">
      <View className="flex flex-row w-full mb-5 justify-center relative">
        <Text className="text-gray text-2xl my-5 font-fcbold text-center">
          Welcome to
        </Text>
        <Text className="ml-2 text-2xl my-5 font-fcbold text-center text-secondary">
          Omise Payment
        </Text>
        <View className="bg-mint h-2 rounded-lg w-10 top-[71%] left-[47%] absolute" />
        <View className="bg-mint h-2 rounded-lg w-5 top-[71%] left-[60%] absolute" />
        <View className="bg-mint h-2 rounded-lg w-2 top-[71%] left-[67%] absolute" />
      </View>
      <Text className="text-gray text-sm mt-1 font-fcregular w-full text-center">
        Simplifying Your Transactions with One Tap
      </Text>
      <Text className="text-gray-200 text-sm my-3 font-fcregular w-full text-center">
        Join thousands of users on Omise Pay and start your transaction today.
      </Text>
    </View>
  );
};

export default LandingText;

const styles = StyleSheet.create({});
