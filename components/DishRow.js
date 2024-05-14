import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { urlFor } from "../sanity";
import {
    MinusCircleIcon, PlusCircleIcon
  } from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";
import { addtobasket, removefrombasket, selectBasketWithId } from "../Slice/basketSlice";



const DishRow = ({ id, name, descriptions, price, image }) => {

  const [isPressed, setIsPressed] = useState(false);
  const dispatch = useDispatch();
  const items = useSelector(state => selectBasketWithId(state, id))


  const additem = () => {
    dispatch(addtobasket({ id, name, descriptions, price, image }))
  } 

  const removeitem = () => {
    if (!items.length > 0) return;
    dispatch(removefrombasket({id}))
  }


  return (
    <>
      <TouchableOpacity onPress={()=> setIsPressed(!isPressed)} className={`bg-white border p-4 border-gray-200 ${isPressed && "border-b-0"}`}>
        <View className="flex-row ">
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400">{descriptions}</Text>
            <Text className="text-gray-400 mt-2">$ {price}</Text>
          </View>
          <View>
            <Image
              source={{
                uri: urlFor(image).url(),
              }}
              className="h-20 w-20 bg-gray-200 p-4"
              style={{
                borderWidth: 1,
                borderColor: "gray",
              }}
            />
          </View>
        </View>
      </TouchableOpacity>
      {
        isPressed && (
            <View className="bg-white px-4">
                <View className="flex-row items-center space-x-2 pb-3">
                <TouchableOpacity onPress={removeitem} disabled={!items.length}>
                    <MinusCircleIcon color={items.length>0? "#00a77a": "gray"} size={40} opacity={0.7}/>
                </TouchableOpacity>
                    <Text>{items.length}</Text>
                <TouchableOpacity onPress= {additem}>
                    <PlusCircleIcon color="#00a77a" size={40} opacity={0.7}/>
                </TouchableOpacity>
                </View>
            </View>
        )
      }
    </>
  );
};
export default DishRow;
