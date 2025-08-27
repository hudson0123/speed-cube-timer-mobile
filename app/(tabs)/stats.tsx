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
    <View className="flex-1 items-left justify-start bg-gray-300 pt-20">
      <Text className="text-4xl font-bold p-5 text-black">Stats</Text>
    </View>
  );
}
