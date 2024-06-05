import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { OMISE_PUBLIC_KEY } from "@env";
import { icons, images } from "../constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScreenPropType } from "@/types/PropTypes";
import CustomHeader from "@/components/CustomHeader";
import Container from "@/components/Container";
import PrimaryButton from "@/components/PrimaryButton";
import LandingText from "@/components/LandingText";

const Home = ({ navigation }: ScreenPropType) => {
  return (
    <SafeAreaView className="bg-primary">
      <View className="h-full bg-primary flex justify-between pb-[50px] px-5">
        <Image
          source={images.logo}
          resizeMode="contain"
          className="h-[200px] w-[200px] mx-auto"
        />
        <LandingText />
        <PrimaryButton
          handlePress={() => navigation.navigate("Card List")}
          btnText="Go To Cards"
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
