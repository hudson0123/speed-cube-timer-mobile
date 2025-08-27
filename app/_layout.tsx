import { Stack } from 'expo-router'
import "../global.css"
import { View } from 'react-native'

export default function _layout() {
  return (
    <View className="flex-1 bg-black">
      <Stack>
      <Stack.Screen name="(tabs)" />
    </Stack>
    </View>
  )
}
