import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { OMISE_PUBLIC_KEY } from "@env";
import { icons, images } from "../constants";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <View className="h-full bg-primary">
      <Text className="text-blue-500 font-fcbold">Home page</Text>
      <Text className="text-blue-500">Key - {OMISE_PUBLIC_KEY}</Text>
      <Image
        source={images.visa}
        resizeMode="contain"
        className="h-[180px] w-[180px] border border-blue-100 rounded-3xl"
      />
    </View>
  );
};

export default Home;
