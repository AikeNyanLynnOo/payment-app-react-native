import { Image, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "@/components/CustomHeader";
import { ScreenPropType } from "@/types/PropTypes";
import Container from "@/components/Container";
import FormField from "@/components/FormField";
import CardType from "@/components/CardType";
import PrimaryButton from "@/components/PrimaryButton";
import { images } from "@/constants";
import Omise from "@/constants/omise_config";
import Toast from "react-native-toast-message";
import { useCardContext } from "@/hooks/useCardContext";

const AddNewCard = ({ navigation }: ScreenPropType) => {
  const { addCard } = useCardContext();
  const [form, setForm] = useState({
    cardType: "",
    cardNumber: "",
    holderName: "",
    expires: "",
    cvv: "",
  });
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    detectCardType(form.cardNumber);
  }, [form.cardNumber]);

  function detectCardType(cardNumber: string) {
    let cardType = "Unknown";

    if (/^4/.test(cardNumber)) {
      cardType = "visa";
    } else if (/^5[1-5]/.test(cardNumber)) {
      cardType = "master";
    } else if (/^(352[89]|35[3-8][0-9])/.test(cardNumber)) {
      cardType = "jcb";
    } else {
      cardType = "unknown";
    }

    setForm((prev) => ({
      ...prev,
      cardType,
    }));
  }

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

  const handleAddCard = async () => {
    try {
      const data = await Omise.createToken({
        card: {
          name: form.holderName,
          city: "Bangkok",
          postal_code: 10320,
          number: form.cardNumber,
          expiration_month: parseInt(form.expires.split("/")[0]),
          expiration_year: parseInt(form.expires.split("/")[1]),
          security_code: form.cvv,
        },
      });
      // console.log("data", JSON.stringify(data));
      if (data && data.id && data.id.startsWith("tokn_")) {
        setIsSuccess(true);
        addCard({
          omiseToken: data.id,
          cardId: data.card.id,
          cardNumber: form.cardNumber,
          cardHolderName: data.card.name,
          cardType: form.cardType,
          expires: form.expires,
        });
        Toast.show({
          type: "success",
          text1: "New card is added!",
        });
      }
    } catch (error) {
      // console.log("Error>>", error);
      setIsSuccess(false);
      Toast.show({
        type: "error",
        text1: "Card information is invalid!",
      });
    }
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
            EndControl={() => <CardType cardType={form.cardType} />}
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
        <PrimaryButton handlePress={handleAddCard} btnText="Add Card" />
      </Container>
      <Toast
        position="bottom"
        visibilityTime={1500}
        bottomOffset={200}
        onHide={() => isSuccess && navigation.navigate("Card List")}
      />
    </SafeAreaView>
  );
};

export default AddNewCard;
