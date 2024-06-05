import { Image, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "@/components/CustomHeader";
import { ScreenPropType } from "@/types/PropTypes";
import Container from "@/components/Container";
import FormField from "@/components/FormField";
import CardTypeRadio from "@/components/CardTypeRadio";
import PrimaryButton from "@/components/PrimaryButton";
import { images } from "@/constants";

const AddNewCard = ({ navigation }: ScreenPropType) => {
  const [form, setForm] = useState({
    cardType: "",
    cardNumber: "",
    holderName: "",
    expires: "",
    cvv: "",
  });

  const formatCardNumber = (text: string) => {
    // Remove non-digit characters
    let cleaned = text.replace(/\D/g, "");

    // Limit to 16 digits
    cleaned = cleaned.slice(0, 16);

    // Adding spaces after every 4 digits
    let formatted = "";
    for (let i = 0; i < cleaned.length; i += 4) {
      if (i + 4 < cleaned.length) {
        formatted += cleaned.substring(i, i + 4) + " ";
      } else {
        formatted += cleaned.substring(i);
      }
    }

    return formatted.trim();
  };

  const handleChange = (cardType: string) => {
    setForm({
      ...form,
      cardType,
    });
  };

  const handleAddCard = () => {
    console.log(form);
  };
  return (
    <SafeAreaView>
      <CustomHeader navigation={navigation} />
      <Container otherStyles="h-full pb-[150px] flex justify-between">
        <View>
          <FormField
            title="ATM/Debit/Credit card number"
            placeholder="0000 0000 0000 0000"
            value={form.cardNumber}
            handleChangeText={(e) =>
              setForm({ ...form, cardNumber: formatCardNumber(e) })
            }
            otherStyles="mb-7"
            EndControl={() => (
              <CardTypeRadio
                cardType={form.cardType}
                handleCardType={handleChange}
              />
            )}
            maxLength={19}
            keyboardType="numeric"
          />
          <FormField
            title="Name on Card"
            placeholder="Ty Lee"
            value={form.holderName}
            handleChangeText={(e) => setForm({ ...form, holderName: e })}
            otherStyles="mb-7"
          />
          <View className="flex flex-row justify-between items-center mb-7">
            <FormField
              title="Expiry date"
              placeholder="MM/YY"
              value={form.expires}
              handleChangeText={(e) => setForm({ ...form, expires: e })}
              otherStyles="flex-1 mr-7"
              maxLength={5}
            />
            <FormField
              title="CVV"
              placeholder="---"
              value={form.cvv}
              handleChangeText={(e) => setForm({ ...form, cvv: e })}
              otherStyles="flex-1"
              maxLength={3}
              keyboardType="numeric"
            />
          </View>
          <View className="flex flex-row justify-center items-center mt-5 gap-x-5">
            <Image
              source={images.verifiedVisa}
              resizeMode="contain"
              className="h-[20px] w-[40px]"
            />
            <Image
              source={images.masterSecureGrey}
              resizeMode="contain"
              className="h-[20px] w-[55px]"
            />
            <Image
              source={images.omiseGrey}
              resizeMode="contain"
              className="h-[20px] w-[55px]"
            />
          </View>
        </View>
        <PrimaryButton handlePress={handleAddCard} btnText="Add Card"/>
      </Container>
    </SafeAreaView>
  );
};

export default AddNewCard;
