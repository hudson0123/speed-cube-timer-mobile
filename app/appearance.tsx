import React from 'react'
import { View, Text, Switch } from 'react-native'

export default function Appearance() {
  return (
    <View className='bg-black h-screen'>
      <Text className='text-white text-4xl'>Appearance Settings</Text>
      <Text className='text-white'>Dark Mode</Text>
      <Switch />
    </View>
  )
}