import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { selectBasketItem, selectBasketTotal } from "../Slice/basketSlice";
import { useNavigation } from "@react-navigation/native";

const BasketIcon = () => {
  const items = useSelector(selectBasketItem);
  const navigation = useNavigation();

  const basketTotal = useSelector(selectBasketTotal);
  if (!items.length > 0) return null;
  return (
    <View className="absolute  bottom-5 w-full z-50">
      <TouchableOpacity
        className="bg-[#00BBCC] mx-5 p-4 rounded-lg flex-row items-center space-x-1"
        onPress={()=>{
            navigation.navigate('basket');
        }}
      >
        <Text className="text-white font-extrabold text-lg bg-[#01A296] py-1 px-2 rounded-full w-9 text-center">
          {items.length}
        </Text>
        <Text className="flex-1 font-extrabold text-lg text-center">
          View Basket
        </Text>
        <Text className="text-lg text-white font-extrabold">
          $ {basketTotal}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;
