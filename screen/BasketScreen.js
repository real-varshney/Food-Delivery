import { useNavigation } from '@react-navigation/native'
import React, { useMemo, useState } from 'react'
import { Text, View, TouchableOpacity, Image,ScrollView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../Slice/restaurantSlice';
import { removefrombasket, selectBasketItem, selectBasketTotal } from '../Slice/basketSlice';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
    XCircleIcon
  } from "react-native-heroicons/outline";
import { urlFor } from '../sanity';

const BasketScreen = ()=>{
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);
    const items = useSelector(selectBasketItem);
    const dispatch = useDispatch();
    const basketTotal = useSelector(selectBasketTotal)

    const [grouped, setGrouped] =useState([]);

    useMemo(()=>{
        const groupeditems = items.reduce((results, item) => {
            (results[item.id] = results[item.id] || []).push(item);
            return results;
        },{});
        setGrouped(groupeditems);
    },[items])

    return(
        <SafeAreaView className="flex-1 bg-white">
            <View className="flex-1 bg-gray-100">
                <View className="p-5 border-[#00CCBB] bg-white shadow-xs">
                    <View>
                        <Text className="text-lg font-bold text-center pt-3">Basket</Text>
                        <Text className="text-center text-gray-400">{restaurant.title}</Text>
                    </View>
                    <TouchableOpacity onPress={navigation.goBack} className="rounded-full bg-gray-100 absolute top-3 right-5">
                        <XCircleIcon  color="#00CCBB" size={50}/>
                    </TouchableOpacity>
                </View>
                <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
                    <Image source={{
                        uri: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=300"
                 }}
                 className="h-7 w-7 bg-gray-300 p-4 rounded-full"/>
                 <Text className="flex-1">Deliver in 50-75 min</Text>
                 <TouchableOpacity>
                    <Text className="text-[#00CCBB]">Change</Text>
                 </TouchableOpacity>
                </View>

                <ScrollView className="divide-y divide-gray-200">
                {
                    Object.entries(grouped).map(([key, items]) => {
                        return(
                            <View key={key} className="flex-row items-center space-x-3 bg-white py-2 px-5">
                                <Text className="text-[#00CCBB]">{items.length} x</Text>
                                <Image 
                                    source={{
                                        uri: urlFor(items[0]?.image).url()
                                    }}
                                    className="h-12 w-12 rounded-full"
                                />
                                <Text className="flex-1 text-md">{items[0]?.name}</Text>
                                <Text className="text-gray-600">
                                    $ {items[0]?.price}
                                </Text>
                                <TouchableOpacity >
                                    <Text className="text-[#00CCBB] text-xs" onPress={()=> dispatch(removefrombasket({id: key}))}>Remove</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    })
                }
                </ScrollView>

                <View className="p-5 bg-white mt-5 space-y-4">
                    <View className="flex-row justify-between">
                        <Text className="text-gray-400">Subtotal</Text>
                        <Text className="text-gray-400">$ {basketTotal.toFixed(2)}</Text>
                    </View>
                    <View className="flex-row justify-between">
                        <Text className="text-gray-400">Delivery Fee</Text>
                        <Text className="text-gray-400">$ {basketTotal >0 ? 5.99: 0.00}</Text>
                    </View>
                    <View className="flex-row justify-between">
                        <Text>Order Total</Text>
                        <Text className="font-extrabold">$ {basketTotal >0 ? (5.99+ basketTotal).toFixed(2): 0.00}</Text>
                    </View>

                    <TouchableOpacity className="rounded-lg bg-[#00CCBB] p-4" onPress={()=> navigation.navigate('prepare')}>
                        <Text className="text-center text-white text-lg font-bold">Place Order</Text>
                    </TouchableOpacity>
                </View>
            </View> 
        </SafeAreaView>
    )
}
export default BasketScreen;
