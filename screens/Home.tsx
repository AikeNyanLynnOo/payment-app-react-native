import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { OMISE_PUBLIC_KEY } from "@env";
import { icons, images } from "../constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScreenPropType } from "@/types/PropTypes";
import CustomHeader from "@/components/CustomHeader";
import Container from "@/components/Container";

const Home = ({ navigation }: ScreenPropType) => {
  return (
    <SafeAreaView>
      <View className="h-full bg-primary">
        <Container>
          <Text className="text-blue-500 font-fcbold">Home page</Text>
          <Text className="text-blue-500">Key - {OMISE_PUBLIC_KEY}</Text>
          <Image
            source={images.visa}
            resizeMode="contain"
            className="h-[180px] w-[180px] border border-blue-100 rounded-3xl"
          />
          <TouchableOpacity
            className="bg-mint w-full mx-auto min-h-[45px] flex justify-center items-center rounded-full"
            onPress={() => navigation.navigate("Card List")}
          >
            <Text className="text-white font-fcbold text-xl">Add Card</Text>
          </TouchableOpacity>
        </Container>
      </View>
    </SafeAreaView>
  );
};

export default Home;
