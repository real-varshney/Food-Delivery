import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import { Text, View, ScrollView, Image } from "react-native";
import { ArrowRightIcon, MapPinIcon } from "react-native-heroicons/outline";
import { StarIcon } from "react-native-heroicons/solid";
import { urlFor } from "../sanity";
import { useNavigation } from "@react-navigation/native";

const RestaurantCard = ({
  id,
  imgurl,
  title,
  rating,
  genre,
  address,
  shortdescription,
  dishes,
  long,
  lat,
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      className="bg-gray-50 mr-3 shadow-md rounded-md"
      onPress={() => {
        navigation.navigate("restaurant", {
          id,
          imgurl,
          title,
          rating,
          genre,
          address,
          shortdescription,
          dishes,
          long,
          lat,
        });
      }}
    >
      <Image
        source={{
          uri: urlFor(imgurl).url(),
        }}
        className="h-36 w-64 rounded-md"
      />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text className="text-xs text-gray-500">
            <Text className="text-gree-500">{rating}</Text> · {genre}
          </Text>
        </View>
        <View className="flex-row items-center">
          <MapPinIcon color="gray" size={22} opacity={0.4} />
          <Text className="text-xs text-gray-500">
            {" "}
            Nearby ·{" "}
            {address.length > 15 ? address.slice(0, 10) + "..." : address}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default RestaurantCard;
