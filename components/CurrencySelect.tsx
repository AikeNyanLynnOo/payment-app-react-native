import SelectDropdown from "react-native-select-dropdown";
import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { CURRENCIES } from "@/constants/dummy";
import { icons, styles } from "@/constants";

const CurrencySelect = ({
  title,
  currency,
  setForm,
}: {
  title?: string;
  currency: string;
  setForm: Function;
}) => {
  return (
    <View>
      <Text className="text-base text-secondary font-fcbold mb-2">{title}</Text>
      <SelectDropdown
        data={CURRENCIES}
        onSelect={(selectedItem, index) => {
          //   console.log(selectedItem, index);
          setForm((prev: any) => ({
            ...prev,
            currency: selectedItem.code,
          }));
        }}
        search={true}
        defaultValueByIndex={CURRENCIES.findIndex(
          (cur) => cur.code.toLowerCase() === currency.toLowerCase()
        )}
        renderButton={(selectedItem, isOpened) => {
          return (
            <View style={inLine.dropdownButtonStyle}>
              <View className="flex flex-row gap-x-3 items-center">
                {selectedItem && (
                  <Text className="text-xl">{selectedItem.flag}</Text>
                )}
                <Text
                  className={`font-fcregular text-xl ${
                    selectedItem ? "text-black" : "text-gray-300"
                  }`}
                >
                  {(selectedItem &&
                    `${selectedItem.code} - ${selectedItem.name}`) ||
                    "Select currency"}
                </Text>
              </View>
              <Image
                source={isOpened ? icons.chevronUp : icons.chevronDown}
                className="h-8 w-8"
                resizeMode="contain"
              />
            </View>
          );
        }}
        renderItem={(item, index, isSelected) => {
          return (
            <View
              style={{
                ...inLine.dropdownItemStyle,
                ...(isSelected && { backgroundColor: "#D2D9DF" }),
              }}
            >
              <Text>{item.flag}</Text>
              <Text
                style={inLine.dropdownItemTxtStyle}
                className="font-fcregular text-xl"
              >{`${item.code} - ${item.name}`}</Text>
            </View>
          );
        }}
        showsVerticalScrollIndicator={false}
        dropdownStyle={inLine.dropdownMenuStyle}
      />
    </View>
  );
};

const inLine = StyleSheet.create({
  dropdownButtonStyle: {
    width: "100%",
    height: 50,
    backgroundColor: styles.colors.primary,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: styles.colors.gray[300],
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "500",
    color: "red",
  },
  dropdownMenuStyle: {
    backgroundColor: styles.colors.gray[300],
    borderRadius: 8,
  },
  dropdownItemStyle: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 15,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    columnGap: 10,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontWeight: "500",
    color: "#151E26",
  },
  dropdownItemIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
});

export default CurrencySelect;
