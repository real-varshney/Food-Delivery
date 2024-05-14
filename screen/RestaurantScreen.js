import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useLayoutEffect, useEffect } from "react";
import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import { urlFor } from "../sanity";
import {
  ArrowLeftIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
  ChevronRightIcon,
} from "react-native-heroicons/outline";
import { StarIcon } from "react-native-heroicons/solid";

import DishRow from "../components/DishRow";
import BasketIcon from "../components/BasketIcon";
import { useDispatch } from "react-redux";
import { setRestaurant } from "../Slice/restaurantSlice";
import BasketScreen from "./BasketScreen";

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  

  const {
    params: {
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
    },
  } = useRoute();


  useEffect(() => {
    dispatch(
      setRestaurant({
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
      })
    );
  }, [dispatch]);

  
  return (
    <>
      <BasketIcon />
      <ScrollView>
        <View>
          <Image
            source={{
              uri: urlFor(imgurl).url(),
            }}
            className="w-full h-56 bg-gray-300 p-4"
          />
          <TouchableOpacity
            className="absolute top-12 left-5 p-2 bg-gray-100 rounded-full"
            onPress={navigation.goBack}
          >
            <ArrowLeftIcon size={20} color="#02dea3" />
          </TouchableOpacity>
        </View>

        <View className="bg-white">
          <View className="px-4 pt-4">
            <Text className="text-3xl font-bold">{title}</Text>
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                <StarIcon color="green" opacity={0.5} size={22} />
                <Text className="text-xs text-gray-500">
                  <Text className="text-green-500">{rating}</Text> . {genre}
                </Text>
              </View>

              <View className="flex-row items-center space-x-1">
                <MapPinIcon color="green" opacity={0.5} size={22} />
                <Text className="text-xs text-gray-500">
                  Nearby .{" "}
                  {address.length > 20 ? address.slice(0, 15) + "..." : address}{" "}
                </Text>
              </View>
            </View>

            <Text className="text-gray-500 mt-2 pb-4 text-justify">
              {shortdescription}
            </Text>
          </View>
          <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
            <QuestionMarkCircleIcon color="gray" opacity={0.6} size={20} />
            <Text className="pl-2 flex-1 text-md font-bold">
              Have a Food Alergy?
            </Text>
            <ChevronRightIcon color="#02dea3" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            paddingBottom: 110,
          }}
        >
          <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>

          {/* Dishes */}

          {dishes.map((dish) => {
            return (
              <DishRow
                key={dish._id}
                id={dish._id}
                name={dish.name}
                descriptions={dish.short_description}
                price={dish.price}
                image={dish.image}
              />
            );
          })}
        </View>
      </ScrollView>
    </>
  );
};
export default RestaurantScreen;
