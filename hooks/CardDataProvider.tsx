import { createCharge } from "@/constants/omise_config";
import { CardContextType, CardType, PaymentObjType } from "@/types/PropTypes";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  SetStateAction,
} from "react";
import Toast from "react-native-toast-message";

export const CardContext = createContext<CardContextType | undefined>(
  undefined
);

export const CardProvider = ({ children }: { children: ReactNode }) => {
  const [cards, setCards] = useState<CardType[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [isPaymentSuccess, setIsPaymentSuccess] = useState(false);
  const [activeOmiseToken, setActiveOmiseToken] = useState("");
  const [paymentState, setPaymentState] = useState<PaymentObjType>({
    loading: false,
    success: false,
    error: null,
    data: null,
  });

  const addCard = (newCard: CardType) => {
    setCards((prevCards) => [...prevCards, newCard]);
  };
  const updateCard = (newCardInfo: CardType, oldCardId?: string) => {
    setCards((prevCards: any): CardType[] => {
      return prevCards.map((oldCard: any) => {
        if (oldCard?.cardId === oldCardId) {
          return { ...newCardInfo };
        } else {
          return oldCard;
        }
      });
    });
  };

  const resetPayment = () => {
    setPaymentState({
      loading: false,
      success: false,
      error: null,
      data: null,
    });
  };

  const initiatePayment = async (payInfo: any, callback: Function) => {
    setPaymentState({
      loading: true,
      success: false,
      error: null,
      data: null,
    });
    try {
      const { paid, ...paymentInfo }: any = await createCharge({
        description: payInfo.description,
        amount: (payInfo.amount && parseInt(payInfo.amount)) || 0,
        currency: payInfo.currency,
        capture: payInfo.capture,
        card: payInfo.card,
      });

      if (!paid) {
        setPaymentState({
          loading: false,
          success: false,
          error: "Payment failed",
          data: null,
        });
        Toast.show({
          type: "error",
          text1: `Payment Failed, Amount. Please try again.`,
        });
        return;
      }
      setPaymentState({
        loading: false,
        success: true,
        error: null,
        data: {
          paid,
          ...paymentInfo,
        },
      });
      Toast.show({
        type: "success",
        text1: `Payment Successful, Amount - ${paymentInfo.amount} ${paymentInfo.currency}`,
      });
      // clear form
      callback();
    } catch (error: any) {
      setPaymentState({
        loading: false,
        success: false,
        error: (error && `${JSON.stringify(error)}`) || null,
        data: null,
      });
      Toast.show({
        type: "error",
        text1: "Payment failed, please check payment details",
      });
    }
  };

  return (
    <CardContext.Provider
      value={{
        cards,
        addCard,
        updateCard,
        isModalOpen,
        setIsModalOpen,
        activeOmiseToken,
        setActiveOmiseToken,
        paymentState,
        initiatePayment,
        resetPayment,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};
