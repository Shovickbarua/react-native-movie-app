import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, Dimensions, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { HeartIcon } from 'react-native-heroicons/solid';
import Cast from '../components/Cast';
import MovieList from '../components/MovieList';
// import { LinearGradient } from 'expo-linear-gradient';

var {width, height} = Dimensions.get('window');

const Movie = () => {
    const {params: item} = useRoute();
    const [isFavourite, setIsFaouvrite] = useState(false);
    const [cast, setCast] = useState([1,2,3,4,5]);
    const [similarMovies, setSimilarMovies] = useState([1,2,3,4,5]);
    const [loading, setLoading] = useState(false);

    const navigation = useNavigation();
    let movieName = 'Ant-Man and the Wasp: Quantumania';

    useEffect(() => {

    },[item])

  return (
    <ScrollView
        contentContainerStyle={{paddingBottom: 20}}
        className='flex-1 bg-neutral-900'
    >
        <View className='w-full'>
            <SafeAreaView className="absolute z-20 w-full flex-row justify-between items-center px-4 mt-2">
                <TouchableOpacity onPress={()=> navigation.goBack()}  className="rounded-xl p-1 bg-yellow-400">
                    <ChevronLeftIcon size='28' strokeWidth={2.5} color='white'/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> setIsFaouvrite(!isFavourite)}  className="rounded-xl p-1">
                    <HeartIcon size='28' color='white'/>
                </TouchableOpacity>
            </SafeAreaView>
            <View>
                <Image
                    source={require('../assets/images/alien.jpg')}
                    style={{width, height: height*0.55}}
                />
                {/* <LinearGradient
                    color={['transparent', 'rgba(23,23,23, 0.8)', 'rgba(23,23,23, 1)']}
                    style={{width, height: height*0.40}}
                    start={{x: 0.5, y: 0}}
                    end={{x: 0.5, y: 1}}
                    className="absolute bottom-0"
                /> */}
            </View>
        </View>

        <View style={{marginTop: -(height*0.09)}} className="space-y-3">
            <Text className="text-white text-center text-3xl font-bold tracking-wider">
                {
                    movieName
                }
            </Text>

            <Text className="text-neutral-400 font-semibold text-base text-center">
                Realeased . 2020 . 170 min
            </Text>

            <View className="flex-row justify-center mx-4 space-x-2">
                <Text className="text-neutral-400 font-semibold text-base text-center">
                    Action .
                </Text>
                <Text className="text-neutral-400 font-semibold text-base text-center">
                    Thrill .
                </Text>
                <Text className="text-neutral-400 font-semibold text-base text-center">
                    Comedy
                </Text>
            </View>

            <Text className="text-neutral-400 mx-4 tracking-wide">
             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Text>
        </View>

        <Cast navigation={navigation} cast={cast}/>

        <MovieList title="Similar Movies" hideSeeAll={true} data={similarMovies}/>
    </ScrollView>
  )
}

export default Movie