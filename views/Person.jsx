import { View, Text, Dimensions, ScrollView, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { HeartIcon } from 'react-native-heroicons/solid';
import MovieList from '../components/MovieList';

var {width, height} = Dimensions.get('window');

const Person = () => {
  const navigation = useNavigation();
  const [isFavourite, setIsFaouvrite] = useState(false);
  const [personMovies, setPersonMovies] = useState([1,2,3,4,5]);
  return (
    <ScrollView
        contentContainerStyle={{paddingBottom: 20}}
        className='flex-1 bg-neutral-900'
    >
      <SafeAreaView className="absolute z-20 w-full flex-row justify-between items-center px-4 mt-2">
        <TouchableOpacity onPress={()=> navigation.goBack()}  className="rounded-xl p-1 bg-yellow-400">
            <ChevronLeftIcon size='28' strokeWidth={2.5} color='white'/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> setIsFaouvrite(!isFavourite)}  className="rounded-xl p-1">
            <HeartIcon size='28' color='white'/>
        </TouchableOpacity>
      </SafeAreaView>

      <View>
        <View className="flex-row justify-center"
          style={{
            shadowColor: 'gray',
            shadowRadius: 40,
            shadowOffset: {width: 0, height: 5},
            shadowOpacity: 1
          }}
        >
          <View className="items-center rounded-full overflow-hidden h-72 w-72 border border-neutral-500">
            <Image
                source={require('../assets/images/antman.jpeg')}
                style={{width: width*0.43, height: height*0.74}}
            />
          </View>
        </View>
        <View className='mt-6'>
            <Text className="text-3xl text-white font-bold text-center">
                Keanu Reeves
            </Text>
            <Text className="text-base text-neutral-500 text-center">
                London, United Kingdom
            </Text>
        </View>
        <View className="mx-3 p-4 mt-6 flex-row justify-between items-center bg-neutral-700 rounded-full">
          <View className="border-r-2 border-r-neutral-400 px-2 items-center">
            <Text className="text-white font-semibold">Gender</Text>
            <Text className="text-neutral-300 text-sm">Male</Text>
          </View>
          <View className="border-r-2 border-r-neutral-400 px-2 items-center">
            <Text className="text-white font-semibold">Birthday</Text>
            <Text className="text-neutral-300 text-sm">1964-09-02</Text>
          </View>
          <View className="border-r-2 border-r-neutral-400 px-2 items-center">
            <Text className="text-white font-semibold">Known for</Text>
            <Text className="text-neutral-300 text-sm">Acting</Text>
          </View>
          <View className="px-2 items-center">
            <Text className="text-white font-semibold">Popularity</Text>
            <Text className="text-neutral-300 text-sm">64.23</Text>
          </View>
        </View>
        <View className="my-6 mx-4 space-y-2">
          <Text className="text-white text-lg">Biography</Text>
          <Text className="text-neutral-400 tracking-wide">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </Text>

          <MovieList title='Movies' hideSeeAll={true} data={personMovies}/>
        </View>
      </View>
    </ScrollView>
  )
}

export default Person