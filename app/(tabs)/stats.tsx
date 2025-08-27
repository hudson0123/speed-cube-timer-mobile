import { View, Text } from 'react-native';
import { useTimes } from 'contexts/TimesContext';

export default function Stats() {
  const { times } = useTimes();

  const formatTime = (ms: number) => {
    const seconds = Math.floor(ms / 1000);
    const milliseconds = ms % 1000;

    // For times under 1 second, show "0.xxx" format
    if (seconds === 0) {
      return `0.${milliseconds.toString().padStart(3, '0')}`;
    }

    // For times over 1 second, show "ss.xxx" format
    return `${seconds}.${milliseconds.toString().padStart(3, '0')}`;
  };

  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-center text-lg mb-2 text-green-500">Times:</Text>
      {times.map((t, index) => (
        <View key={index} className="m-2 rounded-md bg-gray-200 p-2">
          <Text>{formatTime(t)}</Text>
        </View>
      ))}
    </View>
  );
}
