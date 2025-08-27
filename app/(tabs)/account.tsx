import React from 'react'
import { View, Text, Pressable } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link } from 'expo-router';

export default function Account() {
  return (
    <View>
      <View className="flex-row justify-center items-center">
        <Link href="/general" asChild>
          <Pressable className="relative flex-1 bg-gray-600 rounded-md p-4 m-2 h-40">
            <Text className="text-white text-2xl font-bold">General</Text>
            <FontAwesome name="cog" size={48} color="white" style={{ marginLeft: 'auto', marginTop: 'auto' }} />
          </Pressable>
        </Link>

        <Link href="/appearance" asChild>
          <Pressable className="relative flex-1 bg-gray-600 rounded-md p-4 m-2 h-40">
            <Text className="text-white text-2xl font-bold">Appearance</Text>
            <FontAwesome name="paint-brush" size={48} color="white" style={{ position: 'absolute', bottom: 16, right: 16 }} />
          </Pressable>
        </Link>
      </View>

      <View className="flex-row justify-center items-center">
        <Link href="/about" asChild>
          <Pressable className="relative flex-1 bg-gray-600 rounded-md p-4 m-2 h-32">
            <Text className="text-white text-2xl font-bold">Help & About Us</Text>
            <FontAwesome name="question-circle" size={48} color="white" style={{ position: 'absolute', bottom: 16, right: 16 }} />
          </Pressable>
        </Link>
      </View>
    </View>
  )
}
