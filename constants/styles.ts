import { Platform, StyleSheet } from "react-native";

const colors = {
  primary: "#FFFFFF",
  secondary: {
    DEFAULT: "#00000",
    15: "#00000026",
    // 100: "#",
    // 200: "#",
  },
  mint: {
    DEFAULT: "#4AD8DA",
    // 100: "#",
    // 200: "#",
  },
  gray: {
    DEFAULT: "#808080",
    100: "#CDCDCD",
    200: "#8F8F8F",
  },
};
const shadowStyles = StyleSheet.create({
  shadow: {
    backgroundColor: "white",
    borderRadius: 15,
    ...Platform.select({
      ios: {
        width: "100%",
        shadowColor: "#171717",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
      },
      android: {
        width: "98%",
        backgroundColor: "white",
        borderRadius: 10,
        elevation: 5,
        marginHorizontal: 3,
        marginVertical: 3,
      },
    }),
  },
});

export default {
  colors,
  shadowStyles,
};
