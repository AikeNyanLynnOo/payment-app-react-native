import { FlatList, RefreshControl, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Card from "./Card";
import { CardFlatListPropType, CardType } from "../types/PropTypes";
import EmptyState from "./EmptyState";
import { images } from "@/constants";

const CardFlatList = ({ data, navigation }: CardFlatListPropType) => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    // await refetch();
    setTimeout(() => {
      setRefreshing(false);
    }, 3000);
  };

  return (
    <FlatList
      className="h-full bg-primary px-5 pt-3"
      contentContainerStyle={{
        paddingBottom: 100,
      }}
      data={
        (data &&
          data.length > 0 &&
          data.map((card: any, index: number) => ({
            ...card,
            id: index,
          }))) ||
        []
      }
      keyExtractor={(item: { id: number }, index: number) => `${item.id}`}
      renderItem={({ item }: { item: any }) => (
        <Card
          cardType={item.cardType}
          cardNumber={item.cardNumber}
          cardHolderName={item.cardHolderName}
          expires={item.expires}
          omiseToken={item.omiseToken}
          cardId={item.cardId}
        />
      )}
      ListEmptyComponent={() => (
        <EmptyState
          title="No Cards Found"
          subtitle="We recommend adding a card for easy payment"
          icon={images.card}
          navigation={navigation}
        />
      )}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    />
  );
};

export default CardFlatList;

const styles = StyleSheet.create({});
