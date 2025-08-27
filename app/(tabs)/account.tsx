import React from 'react'
import { View, Text } from 'react-native'

export default function Account() {
  return (
    <View>
      <View className='flex-row justify-center items-center'>
        <View className='flex-1 bg-gray-600 rounded-md p-4 m-2 h-40'>
          <Text className='text-white text-2xl font-bold'>General</Text>
        </View>
        <View className='flex-1 bg-gray-600 rounded-md p-4 m-2 h-40'>
          <Text className='text-white text-2xl font-bold'>Appearance</Text>
        </View>
      </View>
      <View className='flex-row justify-center items-center'>
        <View className='flex-1 bg-gray-600 rounded-md p-4 m-2 h-32'>
          <Text className='text-white text-2xl font-bold'>Help & About Us</Text>
        </View>
      </View>
    </View>
  )
}
