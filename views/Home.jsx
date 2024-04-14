import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import TrendingMovies from '../components/TrendingMovies';
import MovieList from '../components/MovieList';
import { useNavigation } from '@react-navigation/native';
import Moviedb from '../api/Moviedb';

const Home = () => {
  const [trending, setTrending] = useState([1,2,3]);
  const [upcoming, setUpcoming] = useState([1,2,3]);
  const [topRated, setTopRated] = useState([1,2,3]);
  const navigation = useNavigation();

  // useEffect(()=>{
  //   getTrendingMovies();
  // },[])

  // const getTrendingMovies = async () =>{
  //   const res = await Moviedb.trendingMovies(); 
  //   if(res){
  //     setTrending(res.results);
  //   }
  // }
  return (
    <View className="flex-1 bg-neutral-800">
      <SafeAreaView className="mt-2">
          <StatusBar/>
          <View className="flex-row justify-between items-center mx-4">
            <Bars3CenterLeftIcon size="30" strokeWidth={2} color="white"/>
            <Text className="">
              <Text className="text-white text-3xl font-bold"><Text className="text-yellow-400">M</Text>ovies</Text>
            </Text>
            <TouchableOpacity onPress={()=> navigation.navigate('Search')}>
              <MagnifyingGlassIcon size="30" strokeWidth={2} color="white"/>
            </TouchableOpacity>
          </View>
      </SafeAreaView>
      <ScrollView 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 10}}
      >
        <TrendingMovies data={trending} />

        <MovieList title="Upcoming" data={upcoming} />

        <MovieList title="Top Rated" data={topRated} />
      </ScrollView>
    </View>
  )
}

export default Home