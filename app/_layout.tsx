import { Stack } from 'expo-router'
import "../global.css"
import { View } from 'react-native'
import { TimesProvider } from '../contexts/TimesContext'; // Adjust path as needed

export default function _layout() {
  return (
    <TimesProvider>
      <View className="flex-1 bg-black">
        <Stack>
          <Stack.Screen name="(tabs)"  options={{ headerShown: false }} />
          <Stack.Screen name="general" options={{ headerShown: true, title: 'General Settings' }} />
          <Stack.Screen name="appearance" options={{ headerShown: true, title: 'Appearance Settings' }} />
          <Stack.Screen name="about" options={{ headerShown: true, title: 'Help & About Us' }} />
        </Stack>
      </View>
    </TimesProvider>
  )
}