import { Stack } from 'expo-router';
import '../global.css';
import { View } from 'react-native';
import { TimesProvider } from '../contexts/TimesContext';

export default function _layout() {
  return (
    <TimesProvider>
      <View className="flex-1 bg-black">
        <Stack>
          <Stack.Screen name="(tabs)" />
        </Stack>
      </View>
    </TimesProvider>
  );
}
