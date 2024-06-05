import { Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "@/components/CustomHeader";
import { ScreenPropType } from "@/types/PropTypes";

const AddNewCard = ({ navigation }: ScreenPropType) => {
  return (
    <SafeAreaView>
      <CustomHeader navigation={navigation} />
      <Text>add new card</Text>
    </SafeAreaView>
  );
};

export default AddNewCard;
