import { View, Text, TouchableWithoutFeedback, Image, Dimensions } from 'react-native'
import React from 'react'
import Carousel from 'react-native-snap-carousel'
import { useNavigation } from '@react-navigation/native'

var {width, height} = Dimensions.get('window');

const MovieCard = ({item, handleClick}) =>{
    return (
        <TouchableWithoutFeedback onPress={()=>handleClick(item)}>
            <Image
                source={require('../assets/images/popeye.jpg')}
                style={{
                    width: width*0.6,
                    height: height*0.4
                }}
                className="rounded-3xl"
            />
        </TouchableWithoutFeedback>
    )
}

const TrendingMovies = ({data}) => {
    const navigation = useNavigation();
    const handleClick = () => {
        navigation.navigate('Movie', item);
    }
  return (
    <View className="my-5">
      <Text className="text-white text-xl mx-4 mb-5">Trending</Text>
      <Carousel
        data={data}
        renderItem={({item})=> <MovieCard item={item} handleClick={handleClick} />}
        firstItem={1}
        inactiveSlideOpacity={0.60}
        sliderWidth={width}
        itemWidth={width*0.60}
        slideStyle={{display: 'flex', alignItems: 'center'}}
      />
    </View>
  )
}

export default TrendingMovies