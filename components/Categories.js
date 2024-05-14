import React, { Component, useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import CategoryCard from "./CategoryCard";
import client, { urlFor } from "../sanity";

const Categories = () => {
  const [data , setData] = useState([]);

  useEffect(()=> {
    client.fetch(`
    *[_type == "category"]
    `).then(res => setData(res)).catch(err => console.log(err));
  },[])

  return (
    <ScrollView
      horizontal
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      showsHorizontalScrollIndicator={false}
    >

      {
        data?.map(cat => {
          return(

            <CategoryCard
              key={cat._id}
              imgurl={urlFor(cat.image).url()}
              title={cat.name}
            />
          )
        })
      }
    </ScrollView>
  );
};

export default Categories;
