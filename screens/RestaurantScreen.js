import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import {useRoute, useNavigation} from '@react-navigation/native'
import { useLayoutEffect, useEffect } from 'react';
import { urlFor } from '../sanity';
import {StarIcon} from 'react-native-heroicons/solid';
import {ArrowLeftIcon, ChevronRightIcon, AdjustmentsVerticalIcon, MagnifyingGlassIcon,MapPinIcon, QuestionMarkCircleIcon } from 'react-native-heroicons/outline'
import {useDispatch} from 'react-redux'
import {setRestaurant } from '../features/restaurantSlice'

import DishRow from '../components/DishRow';
import BasketIcon from '../components/BasketIcon';

const RestaurantScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const {params: {
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        dishes,
        long,
        lat,
    }} = useRoute();

    useEffect(() => {
        dispatch(setRestaurant({
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        dishes,
        long,
        lat,
        })
        )
    }, [dispatch]);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, []);

  return (
    <>

    <BasketIcon />

    <ScrollView>
        <View className = 'relative bg-gray-100'>
        <Image 
        source = {{
            uri: urlFor(imgUrl).url(),
        }}
        className = 'w-full h-56 bg-gray-300 p-4'/>
        <TouchableOpacity onPress = {navigation.goBack}
        className = 'absolute top-14 left-5 p-2 bg-gray-100 rounded-full' >
            <ArrowLeftIcon size = {20} color = "#00CCBB" />
        </TouchableOpacity>

        <View classname = 'bg-white'>
            <View classname = 'px-4 pt-4'>
                <Text className = 'text-2xl font-bold'> {title}</Text>
                <View className = 'flex-row space-x-2 my-1'>
                    <View className = 'flex-row items-centerspace-x-1'>
                        <StarIcon color = 'green' opacity = {0.5} size = {22} />
                        <Text className = 'text-xs pt-1 text-gray-500'> 
                        <Text className = 'text-green-500'> {rating} </Text> . {genre}
                        </Text>
                    </View>
                    <View className = 'flex-row items-centerspace-x-1'>
                        <MapPinIcon color = 'gray' opacity = {0.4} size = {22} />
                        <Text className = 'text-xs pt-1 text-gray-500'> 
                        <Text className = 'text-gray-500'>nearby. {address} </Text> . {genre}
                        </Text>
                    </View>
                </View>
            </View>

            <Text className = 'text-gray-500 mt-2 pb-4'>{short_description}</Text>

        </View>
        <TouchableOpacity className = 'flex-row items-center space-x-2 p-4 border-y border-gray-300'> 
            <QuestionMarkCircleIcon color = 'gray opacity = {0.6} size = {20}' />
            <Text className = 'pl-2 flex-1 text-md font-bold'>
                Have a food allergy?
            </Text>
            <ChevronRightIcon color = '00CCBB' />
        </TouchableOpacity>

        <View className = 'pb-36'> 
            <Text className = 'px-4 pt-6 mb-3 font-bold text-xl'> 
                Menu 
            </Text>

            {dishes.map(dish => (
                <DishRow
                key = {dish._id}
                id = {dish._id}
                name = {dish.name}
                description = {dish.short_description}
                price = {dish.price}
                image = {dish.image}
                />
                
                ))}
        </View>
        </View>
      
    </ScrollView>
    </>
    
  )
}

export default RestaurantScreen