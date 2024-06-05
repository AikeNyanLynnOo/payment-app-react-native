import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { images } from "@/constants";

const CardTypeRadio = ({
  cardType,
  handleCardType,
}: {
  cardType: string;
  handleCardType: Function;
}) => {
  return (
    <View className="flex flex-row justify-end items-center gap-x-2">
      <TouchableOpacity
        onPress={() => handleCardType("visa")}
        className={`px-1 py-2 border-gray-200 rounded ${
          cardType === "visa" ? "border" : ""
        }`}
      >
        <Image
          source={images.visa}
          className={`h-[15px] w-[25px]`}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleCardType("master")}
        className={`px-1 py-2 border-gray-200 rounded ${
          cardType === "master" ? "border" : ""
        }`}
      >
        <Image
          source={images.master}
          className={`h-[15px] w-[25px]`}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleCardType("jcb")}
        className={`px-1 py-2 border-gray-200 rounded ${
          cardType === "jcb" ? "border" : ""
        }`}
      >
        <Image
          source={images.jcb}
          className={`h-[15px] w-[25px]`}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export default CardTypeRadio;
