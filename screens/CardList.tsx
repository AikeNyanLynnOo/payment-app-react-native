import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../components/CustomHeader";
import { CardListScreenPropType } from "../types/PropTypes";
import Container from "@/components/Container";
import Card from "@/components/Card";
import CardFlatList from "@/components/CardFlatList";
import { CARDS } from "@/constants/dummy";
import { CardProvider } from "@/hooks/CardDataProvider";
import { useCardContext } from "@/hooks/useCardContext";
import PaymentModal from "@/components/PaymentModal";
import Toast from "react-native-toast-message";

const CardList = ({ navigation }: CardListScreenPropType) => {
  const { cards } = useCardContext();
  return (
    <SafeAreaView>
      <CustomHeader navigation={navigation} title="Cards" canAddNew={true} />
      <CardFlatList data={cards} navigation={navigation} />
    </SafeAreaView>
  );
};

export default CardList;
