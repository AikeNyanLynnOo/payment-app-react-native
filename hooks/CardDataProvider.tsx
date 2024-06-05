import { CardContextType, CardType } from "@/types/PropTypes";
import React, { createContext, useContext, useState, ReactNode } from "react";


export const CardContext = createContext<CardContextType | undefined>(undefined);

export const CardProvider = ({ children }: { children: ReactNode }) => {
  const [cards, setCards] = useState<CardType[]>([]);
  const addCard = (newCard: CardType) => {
    setCards((prevCards) => [...prevCards, newCard]);
  };

  return (
    <CardContext.Provider value={{ cards, addCard }}>
      {children}
    </CardContext.Provider>
  );
};

