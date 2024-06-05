import { NavigationProp } from "@react-navigation/native";
import React, { Component, ReactElement } from "react";
import { GestureResponderEvent, ImageSourcePropType } from "react-native";

export interface FormFieldPropType {
  title: string;
  value: string;
  type?: string;
  placeholder?: string;
  handleChangeText: (text: string) => void;
  EndControl?: () => React.JSX.Element;
  otherStyles?: string;
  [key: string]: any;
}

export interface CardFlatListPropType {
  data: CardType[];
  navigation: NavigationProp<any, any>;
}
export interface EmptyStatePropType {
  title?: string;
  subtitle?: string;
  icon?: ImageSourcePropType;
  navigation: NavigationProp<any, any>;
}

export interface CardType {
  cardType?: "visa" | "master" | "jcb" | string;
  cardNumber: string;
  cardHolderName: string;
  expires: string;
  cardId?: string;
  omiseToken?: string;
}

export interface CardListScreenPropType {
  navigation: NavigationProp<any, any>;
  cards?: CardType[];
  [key: string]: any;
}
export interface AddNewCardScreenPropType {
  navigation: NavigationProp<any, any>;
  [key: string]: any;
}
export interface ScreenPropType {
  navigation: NavigationProp<any, any>;
  [key: string]: any;
}

export interface ButtonPropType {
  btnText: string;
  handlePress: (event: GestureResponderEvent) => void;
}
export interface IconButtonPropType {
  iconSource: ImageSourcePropType;
  handlePress: (event: GestureResponderEvent) => void;
  disabled?: boolean;
  otherStyles?: string;
  otherIconStyles?: string;
}

export interface HeaderPropType {
  navigation: NavigationProp<any, any>;
  title?: string;
  canGoBack?: boolean;
  canAddNew?: boolean;
}

export interface ComponentPropType {
  children: any;
  isScrollView?: boolean;
  [key: string]: any;
}

export interface CardContextType {
  cards: CardType[];
  addCard: (newCard: CardType) => void;
}
