import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ComponentPropType } from "@/types/PropTypes";

const Container = ({
  children,
  otherStyles,
  isScrollView,
}: ComponentPropType) => {
  return (
    (isScrollView && (
      <ScrollView
        className={`px-5 py-5 bg-primary pb-10 ${otherStyles}`}
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        {children}
      </ScrollView>
    )) || (
      <View className={`px-5 py-5 bg-primary ${otherStyles}`}>{children}</View>
    )
  );
};

export default Container;
