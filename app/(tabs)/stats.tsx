import { View, Text, Pressable, ScrollView } from 'react-native';
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
    <View className="flex-1 bg-black px-4 pt-16">
      {/* Header */}
      <Text className="mb-3 text-4xl font-bold text-white">Stats</Text>
      <Text className="mb-2 text-sm text-gray-300">Session</Text>
      {/* Main Content */}
      <View className="flex-row">
        {/* LEFT SIDE */}
        <View className="mr-3 flex-1">
          <Pressable className="mb-4 rounded-lg bg-gray-700 py-2">
            <Text className="text-center font-semibold text-white">Default</Text>
          </Pressable>
          <View className='flex-1 rounded-lg bg-gray-800 p-2'>
            <Text className="mb-2 text-gray-400">RECENT TIMES</Text>
            <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
              {times.map((time) => (
                <View key={time} className='bg-gray-500 mb-2 rounded p-1'>
                  <Text className='text-xl text-white font-semibold'>{formatTime(time)}</Text>
                </View>
              ))}
            </ScrollView>
          </View>
        </View>

        {/* RIGHT SIDE */}
        <View className="flex-1">
          {/* Solve Count */}
          <View className="mb-3 rounded-lg bg-gray-800 p-2">
            <Text className="mb-2 text-gray-400">SOLVE COUNT</Text>
            <Text className="ml-1 text-2xl font-bold text-white">{times.length}</Text>
          </View>

          {/* Best Solve */}
          <View className="mb-3 rounded-lg bg-gray-800 p-2">
            <Text className="mb-2 text-gray-400">BEST SOLVE</Text>
            <Text className="ml-1 text-2xl font-bold text-white">{formatTime(Math.min(...times))}</Text>
          </View>

          {/* Current */}
          <View className="mb-3 rounded-lg bg-gray-800 p-2">
            <Text className="mb-2 text-gray-400">CURRENT</Text>
            <View className='ml-1'>
              <Text className="mb-1 text-white">AO5</Text>
              <Text className="font-semibold text-2xl mb-2 text-white">11.345</Text>
              <Text className="mb-1 text-white">AO12</Text>
              <Text className="font-semibold text-2xl mb-2 text-white">13.345</Text>
              <Text className="mb-1 text-white">AO100</Text>
              <Text className="font-semibold text-2xl text-white">13.525</Text>
            </View>
          </View>

          {/* Best */}
          <View className="mb-3 rounded-lg bg-gray-800 p-2">
            <Text className="mb-2 text-gray-400">BEST</Text>
            <View className='ml-1'>
              <Text className="mb-1 text-white">AO5</Text>
              <Text className="font-semibold text-2xl mb-2 text-white">11.345</Text>
              <Text className="mb-1 text-white">AO12</Text>
              <Text className="font-semibold text-2xl mb-2 text-white">13.345</Text>
              <Text className="mb-1 text-white">AO100</Text>
              <Text className="font-semibold text-2xl text-white">13.525</Text>
            </View>
          </View>

          {/* Session Mean */}
          <View className="rounded-lg bg-gray-800 p-2">
            <Text className="mb-2 text-gray-400">SESSION MEAN</Text>
            <Text className="ml-1 text-2xl font-bold text-white">{formatTime(Math.floor((times.reduce((accumulator, currentValue) => accumulator + currentValue, 0)) / times.length))}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
