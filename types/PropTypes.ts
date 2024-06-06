import { NavigationProp } from "@react-navigation/native";
import React, { Component, ReactElement } from "react";
import { GestureResponderEvent, ImageSourcePropType } from "react-native";

export interface FormFieldPropType {
  title: string;
  value: string;
  type?: string;
  placeholder?: string;
  helperText?: string;
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
  cvv?: string;
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
  disabled?: boolean;
  isLoading?: boolean;
  handlePress: (event: GestureResponderEvent) => void;
  otherStyles?: string;
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
  updateCard: (newCardInfo: CardType, oldCardId?: string) => void;
  isModalOpen: boolean;
  setIsModalOpen: Function;
  // isPaymentSuccess: boolean;
  // setIsPaymentSuccess: Function;
  activeOmiseToken: string;
  setActiveOmiseToken: Function;
  paymentState: PaymentObjType;
  initiatePayment: Function;
  resetPayment: Function;
}

export interface PaymentFormPropType {
  description: string;
  currency: string;
  amount: string;
}

export interface PaymentModalPropType {
  title?: string;
  isOpen: boolean;
  setIsOpen: Function;
  form: PaymentFormPropType;
  setForm: Function;
  modalAction: (event: GestureResponderEvent) => void;
}

export interface ChargePropType {
  description: string;
  amount: number;
  currency: string;
  capture: boolean;
  card?: string;
}

export interface PaymentObjType {
  loading: boolean;
  success: boolean;
  error: string | null;
  data: any;
}
