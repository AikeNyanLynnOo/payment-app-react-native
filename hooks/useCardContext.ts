import { CardContextType } from "@/types/PropTypes";
import { useContext } from "react";
import { CardContext } from "./CardDataProvider";

export const useCardContext = (): CardContextType => {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error("Must use inside context provider");
  }
  return context;
};
