import React from 'react'
import { View, Text } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Account() {
  return (
    <View>
      <View className='flex-row justify-center items-center'>
        <View className='relative flex-1 bg-gray-600 rounded-md p-4 m-2 h-40'>
          <Text className='text-white text-2xl font-bold'>General</Text>
          <FontAwesome name="cog" size={48} color="white" className='absolute bottom-4 right-4' />
        </View>
        <View className='relative flex-1 bg-gray-600 rounded-md p-4 m-2 h-40'>
          <Text className='text-white text-2xl font-bold'>Appearance</Text>
          <FontAwesome name="paint-brush" size={48} color="white" className='absolute bottom-4 right-4' />
        </View>
      </View>
      <View className='flex-row justify-center items-center'>
        <View className='relative flex-1 bg-gray-600 rounded-md p-4 m-2 h-32'>
          <Text className='text-white text-2xl font-bold'>Help & About Us</Text>
          <FontAwesome name="question-circle" size={48} color="white" className='absolute bottom-4 right-4' />
        </View>
      </View>
    </View>
  )
}
