import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { CardType } from "@/types/PropTypes";
import { images, styles } from "@/constants";
import { maskNumbers } from "../utils/commonFunction";
import CardNumDisplay from "./CardNumDisplay";
import GroupText from "./GroupText";
import Omise from "@/constants/omise_config";

const Card = ({
  cardType,
  cardNumber,
  cardHolderName,
  expires,
  omiseToken,
}: CardType) => {
  const makePayment = async () => {
    // try {
    //   const data = await Omise.createCharge({
    //     description: "some description",
    //     amount: 500000, // 5,000 baht
    //     currency: "thb",
    //     capture: true,
    //     card: omiseToken,
    //   });
    // } catch (error) {}
  };

  return (
    <TouchableOpacity
      onPress={makePayment} // go to payment
      className="min-h-[160px] p-6 mb-5"
      style={styles.shadowStyles.shadow}
    >
      {cardType === "visa" && (
        <Image
          source={images.visa}
          resizeMode="contain"
          className="w-[65px] h-[22px]"
        />
      )}
      {cardType === "master" && (
        <Image
          source={images.master}
          resizeMode="contain"
          className="w-[65px] h-[22px]"
        />
      )}
      {cardType === "jcb" && (
        <Image
          source={images.jcb}
          resizeMode="contain"
          className="w-[65px] h-[22px]"
        />
      )}
      {cardType === "unknown" && (
        <Image
          source={images.card}
          resizeMode="contain"
          className="w-[65px] h-[22px]"
        />
      )}
      <CardNumDisplay cardNumStr={maskNumbers(cardNumber)} />
      <View className="flex flex-row items-center justify-between mt-4">
        <GroupText title="Name on Card" subTitle={cardHolderName} />
        <GroupText title="Expires" subTitle={expires} />
      </View>
    </TouchableOpacity>
  );
};

export default Card;
