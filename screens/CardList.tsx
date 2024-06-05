import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../components/CustomHeader";
import { CardListScreenPropType } from "../types/PropTypes";
import Container from "@/components/Container";
import Card from "@/components/Card";
import CardFlatList from "@/components/CardFlatList";
import { CARDS } from "@/constants/dummy";

const CardList = ({ navigation, cards }: CardListScreenPropType) => {
  return (
    <SafeAreaView>
      <CustomHeader navigation={navigation} title="Cards" canAddNew={true} />
      {/* <Container otherStyles="h-full" isScrollView={true}>
        <Card
          cardType="visa"
          cardNumber="4761-6400-1234-6520"
          cardHolderName="Ty Lee"
          expires="12/25"
        />
        <Card
          cardType="master"
          cardNumber="4761-6400-1234-4489"
          cardHolderName="Ty Lee"
          expires="12/25"
        />
        <Card
          cardType="jcb"
          cardNumber="4761-6400-1234-3292"
          cardHolderName="Ty Lee"
          expires="12/25"
        />
        <Card
          cardType="jcb"
          cardNumber="4761-6400-1234-3292"
          cardHolderName="Ty Lee"
          expires="12/25"
        />
        <Card
          cardType="jcb"
          cardNumber="4761-6400-1234-3292"
          cardHolderName="Ty Lee"
          expires="12/25"
        />
      </Container> */}
      <CardFlatList data={CARDS} navigation={navigation} />
    </SafeAreaView>
  );
};

export default CardList;
