import {
  Dimensions,
  GestureResponderEvent,
  Modal,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import IconButton from "./IconButton";
import { icons, styles } from "@/constants";
import FormField from "./FormField";
import CurrencySelect from "./CurrencySelect";
import PrimaryButton from "./PrimaryButton";
import { PaymentModalPropType } from "@/types/PropTypes";
import Toast from "react-native-toast-message";
import { useCardContext } from "@/hooks/useCardContext";
import { useEffect } from "react";

const PaymentModal = ({
  title,
  isOpen,
  setIsOpen,
  form,
  setForm,
  modalAction,
}: PaymentModalPropType) => {
  // const windowHeight = Dimensions.get("window").height;
  const { isModalOpen, paymentState, setIsModalOpen, activeOmiseToken } =
    useCardContext();
  const { loading, success } = paymentState;

  const [isBtnDisable, setIsBtnDisable] = useState(true);

  useEffect(() => {
    const currentFormState = [form.amount, form.currency, form.description];
    const emptyFormParts = currentFormState.filter((formPart) => {
      if (formPart.length === 0) {
        return true;
      }
    });
    if (emptyFormParts.length === 0) {
      setIsBtnDisable(false);
      return;
    }
    setIsBtnDisable(true);
  }, [form, isModalOpen]);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isOpen}
      onRequestClose={() => setIsOpen(!isOpen)}
    >
      <View style={[inLine.bottomSheet, { height: "auto" }]}>
        <View className="flex flex-row w-full justify-between items-center border border-t-0 border-l-0 border-r-0 border-b-gray-300 pb-4 px-5">
          <Text className="font-fcbold text-2xl">
            {title || "Fill payment details"}
          </Text>
          <IconButton
            iconSource={icons.close}
            handlePress={() => setIsOpen(!isOpen)}
          />
        </View>
        <View className="px-5 w-full mt-4">
          <FormField
            title="Description"
            placeholder="Payment for something"
            value={form.description}
            handleChangeText={(e) => setForm({ ...form, description: e })}
            otherStyles="mb-2"
          />
          <FormField
            title="Amount"
            placeholder="50,000"
            value={form.amount.toString()}
            handleChangeText={(e) => setForm({ ...form, amount: e })}
            otherStyles="mb-2"
            keyboardType="numeric"
            helperText="Min 2000"
          />
          <CurrencySelect
            title="Currency"
            setForm={setForm}
            currency={form.currency}
          />
          <PrimaryButton
            btnText="Make Payment"
            handlePress={modalAction}
            otherStyles="mt-5"
            disabled={isBtnDisable}
            isLoading={loading}
          />
        </View>
      </View>
      <Toast
        position="bottom"
        visibilityTime={1000}
        bottomOffset={110}
        onHide={() => success && setIsModalOpen(!isModalOpen)}
      />
    </Modal>
  );
};

export default PaymentModal;

const inLine = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomSheet: {
    position: "absolute",
    left: 0,
    right: 0,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 23,
    paddingBottom: 50,
    bottom: 0,
    shadowColor: styles.colors.secondary.DEFAULT,
    borderTopWidth: 1,
    borderTopColor: styles.colors.gray[300],
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
  },
});
