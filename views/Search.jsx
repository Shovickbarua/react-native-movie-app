import { View, Text, SafeAreaView, TextInput, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Image, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { XMarkIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'

var {width, height} = Dimensions.get('window');

const Search = () => {
  const navigation = useNavigation();
  const [results, setResults] = useState([1,2,3,4,5]);
  let movieName = 'Ant-Man and the Wasp: Quantumania';
  return (
    <SafeAreaView className="bg-neutral-800 flex-1">
      <View className="mx-4 mb-3 flex-row justify-between items-center border border-neutral-500 rounded">
        <TextInput
          placeholder='Search Movie'
          placeholderTextColor={'lightgray'}
          className="pb-1 pl-6 flex-1 text-base font-semibold text-white tracking-wider"
        />
        <TouchableOpacity
          onPress={()=> navigation.navigate('Home')}
          className="rounded-full p-3 m-1 bg-neutral-500"
        >
          <XMarkIcon size="25" color="white"/>
        </TouchableOpacity>
      </View>
      {
        results.length>0? (
          <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: 15}}
          className="space-y-3"
        >
          <Text className="text-white font-semibold ml-1">Results ({results.length})</Text>
          <View className="flex-row justify-between flex-wrap">
            {
              results.map((item, index)=>{
                return (
                  <TouchableWithoutFeedback
                    key={index}
                    onPress={()=> navigation.push("Movie", item)}
                  >
                    <View className="space-y-2 mb-4">
                      <Image className="rounded-3xl"
                        source={require('../assets/images/alien.jpg')}
                        style={{width: width*0.44, height: height*0.3}}
                      />
                      <Text className="text-neutral-300 ml-1">
                        {
                          movieName.length>22? movieName.slice(0,22)+'...': movieName
                        }
                      </Text>
                    </View>
                  </TouchableWithoutFeedback>
                )
              })
            }
          </View>
        </ScrollView>
        ):(
          <View className='flex-row justify-center'>
            <Image source={require('../assets/images/alien.jpg')}
              className='h-96 w-96' 
            />
          </View>
        )
      }

    </SafeAreaView>
  )
}

export default Search