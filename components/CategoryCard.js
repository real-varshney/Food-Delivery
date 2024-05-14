import React, { Component } from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native'

const CategoryCard =({imgurl , title}) => {
    return(
        <TouchableOpacity className=" mr-2 relative">
            <Image className="h-20 w-20 rounded-sm" source={{
                uri: imgurl,
            }}/>
            <Text className=" first-letter text-gray-500">{title}</Text>
        </TouchableOpacity>
    )
}

export default CategoryCard