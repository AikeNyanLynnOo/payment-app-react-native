import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { CardType } from "@/types/PropTypes";
import { images, styles } from "@/constants";
import { maskNumbers } from "../utils/commonFunction";
import CardNumDisplay from "./CardNumDisplay";
import GroupText from "./GroupText";
import Omise, { createCharge } from "@/constants/omise_config";
import PaymentModal from "./PaymentModal";
import Toast from "react-native-toast-message";

import { OMISE_API, OMISE_PUBLIC_KEY } from "@env";
import { useCardContext } from "@/hooks/useCardContext";
const Card = ({
  cardId,
  cardType,
  cardNumber,
  cardHolderName,
  expires,
  cvv,
  omiseToken,
}: CardType) => {
  const {
    updateCard,
    isModalOpen,
    setIsModalOpen,
    activeOmiseToken,
    setActiveOmiseToken,
    paymentState,
    initiatePayment,
    resetPayment,
  } = useCardContext();

  const { loading, success, data } = paymentState;

  const [form, setForm] = useState({
    description: "",
    amount: "",
    currency: "",
  });

  const clearForm = () => {
    setForm({ description: "", amount: "", currency: "" });
  };

  const handlePressCard = async () => {
    resetPayment();
    try {
      const data = await Omise.createToken({
        card: {
          name: cardHolderName,
          city: "Bangkok",
          postal_code: 10320,
          number: cardNumber,
          expiration_month: parseInt(expires.split("/")[0]),
          expiration_year: parseInt(expires.split("/")[1]),
          security_code: cvv,
        },
      });
      if (data && data.id && data.id.startsWith("tokn_")) {
        setIsModalOpen(!isModalOpen);
        updateCard(
          {
            omiseToken: data.id,
            cardId: data.card.id,
            cardNumber,
            cardHolderName,
            cardType,
            expires,
          },
          cardId
        );
        setActiveOmiseToken(data.id);
      }
    } catch (error) {
      // console.log("Error>>", error);
      setActiveOmiseToken("");
    }
  };
  const makePayment = async () => {
    await initiatePayment(
      {
        description: form.description,
        amount: (form.amount && parseInt(form.amount)) || 0,
        currency: form.currency,
        capture: true,
        card: activeOmiseToken,
      },
      clearForm
    );
  };

  return (
    <TouchableOpacity
      onPress={handlePressCard} // go to payment
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
      <PaymentModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        modalAction={makePayment}
        form={form}
        setForm={setForm}
      />
    </TouchableOpacity>
  );
};

export default Card;
