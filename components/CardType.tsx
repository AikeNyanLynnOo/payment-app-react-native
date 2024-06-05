import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { images } from "@/constants";

const CardType = ({
  cardType,
}: {
  cardType: "visa" | "master" | "jcb" | string;
}) => {
  return (
    <View className="flex flex-row justify-end items-center gap-x-2">
      {cardType === "visa" && (
        <Image
          source={images.visa}
          className={`h-[20px] w-[30px]`}
          resizeMode="contain"
        />
      )}
      {cardType === "master" && (
        <Image
          source={images.master}
          className={`h-[20px] w-[30px]`}
          resizeMode="contain"
        />
      )}
      {cardType === "jcb" && (
        <Image
          source={images.jcb}
          className={`h-[20px] w-[30px]`}
          resizeMode="contain"
        />
      )}
      {cardType === "unknown" && (
        <Image
          source={images.card}
          className={`h-[20px] w-[30px]`}
          resizeMode="contain"
        />
      )}
    </View>
  );
};

export default CardType;
