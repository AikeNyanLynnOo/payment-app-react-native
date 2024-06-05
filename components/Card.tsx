import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { CardType } from "@/types/PropTypes";
import { images, styles } from "@/constants";
import { maskNumbers } from "../utils/commonFunction";
import CardNumDisplay from "./CardNumDisplay";
import GroupText from "./GroupText";

const Card = ({ cardType, cardNumber, cardHolderName, expires }: CardType) => {
  return (
    <TouchableOpacity
      onPress={() => {}} // go to payment
      className="min-h-[160px] p-6 mb-5"
      style={styles.shadowStyles.shadow}
    >
      <Image
        source={images[`${cardType}`]}
        resizeMode="contain"
        className="w-[65px] h-[22px]"
      />
      <CardNumDisplay cardNumStr={maskNumbers(cardNumber)} />
      <View className="flex flex-row items-center justify-between mt-4">
        <GroupText title="Name on Card" subTitle={cardHolderName} />
        <GroupText title="Expires" subTitle={expires} />
      </View>
    </TouchableOpacity>
  );
};

export default Card;
