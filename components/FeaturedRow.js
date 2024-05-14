import React, { Component, useEffect, useState } from "react";
import { Text, View , ScrollView} from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard"
import client from "../sanity";

const FeaturedRow = ({ id, title, description }) => {

  const [data , setData] = useState([])
 
  useEffect(()=>{

    client.fetch(`
    *[_type == "featured" && _id == $id]{
      ...,
      restaurants[] -> {
        ...,
        dishes[]->,
        type -> {
          name
        }
      },
    }[0]`,{id}).then(value => setData(value?.restaurants)).catch(err => console.log(err));

  },[id])


  return (
    <View className="">
      <View className="mt-4 flex-row items-center justify-between px-4 ">
        <Text className="font-bold text-lg ">{title}</Text>
        <ArrowRightIcon color="black"/>
      </View>
      <Text className="text-xs text-gray-700 px-4">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
            paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4 "
      >

        {
          data?.map(rest =>{
            return (
              <RestaurantCard
                key={rest._id}
                id={rest._id}
                imgurl={rest.image}
                title={rest.name}
                rating={rest.rating}
                genre={rest.type?.name}
                address={rest.address}
                shortdescription={rest.short_description}
                dishes={rest.dishes}
                long={rest.long}
                lat={rest.lat}
              />
            );
          })
        }

      </ScrollView>
    </View>
  );
};
export default FeaturedRow;
