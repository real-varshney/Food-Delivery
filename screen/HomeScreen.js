import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect, useEffect , useState } from "react";
import { Text, View, SafeAreaView, Image, TextInput , ScrollView} from "react-native";
import {
  ChevronDownIcon,
  UserIcon,
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import client from "../sanity"


const HomeScreen = () => {

  const [featuredCategories , setFeaturedCategories] = useState([])

  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  useEffect(()=>{
    client.fetch(`
    *[_type == "featured"]|{
      ...,
      restaurants[] -> {
        ...,
        dishes[]->
      }
    }
    `).then((res)=> {setFeaturedCategories(res);}).catch((err)=>console.log(err))
    // console.log(featuredCategories)
  },[])

  return (
    <SafeAreaView className="pt-11 bg-white pb-30">
      <View className="flex-row pb-4 items-center mx-4 space-x-2">
        <Image
          className="h-8 w-8 bg-gray-400 p-4 rounded-full"
          source={{
            uri: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
          }}
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-500 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location <ChevronDownIcon size={20} color="black" />
          </Text>
        </View>
        <UserIcon size={35} color="#02dea3" />
      </View>
      <View className="flex-row items-center space-x-2 px-4 mb-2">
        <View className="flex-row space-x-2 bg-gray-200 flex-1 p-3 items-center rounded-md">
          <MagnifyingGlassIcon color="black" size={20}/>
          <TextInput placeholder="Restaraunts ad Cuisine" />
        </View>
        <AdjustmentsVerticalIcon color="black" size={30} />
      </View>
      <ScrollView className="bg-gray-80" style={{
        marginBottom: 125,
      }}
      showsVerticalScrollIndicator={false}>
        {/* ******************* */}
        <Categories/>
        {/* ******************* */}

        {
          featuredCategories?.map(category =>{
            return(
            <FeaturedRow 
              key={category._id}
              id ={category._id}
              title = {category.name}
              description = {category.short_description}
              
            />
            )
          })
        }
        {/* ******************* */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
