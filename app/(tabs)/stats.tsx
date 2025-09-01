import { View, Text, Pressable, ScrollView } from 'react-native';
import { useTimes } from 'contexts/TimesContext';

export default function Stats() {
  const { times } = useTimes();

  const calculateAverageOfFive = (times: number[]) => {
    const sortedTimes = [...times].sort((a, b) => a - b);
    const middleThreeTotal = sortedTimes.slice(1, 4).reduce((acc, curr) => acc + curr);
    return Math.floor(middleThreeTotal / 3);
  };

  const calculateAverageOfTwelve = (times: number[]) => {
    const sortedTimes = [...times].sort((a, b) => a - b);
    const middleTenTotal = sortedTimes.slice(1, 11).reduce((acc, curr) => acc + curr);
    return Math.floor(middleTenTotal / 10);
  };

  const calculateAverageOfHundred = (times: number[]) => {
    const sortedTimes = [...times].sort((a, b) => a - b);
    const middleNinetyTotal = sortedTimes.slice(5, 94).reduce((acc, curr) => acc + curr);
    return Math.floor(middleNinetyTotal / 90);
  };

  function bestAverageOfFive(times: number[]): number | null {
    if (times.length < 5) return null;

    let best: number | null = null;
    for (let i = 0; i <= times.length - 5; i++) {
      const window = times.slice(i, i + 5);
      const avg = calculateAverageOfFive(window);
      if (best === null || avg < best) {
        best = avg;
      }
    }
    return best;
  }

  function bestAverageOfTwelve(times: number[]): number | null {
    if (times.length < 12) return null;

    let best: number | null = null;
    for (let i = 0; i <= times.length - 12; i++) {
      const window = times.slice(i, i + 12);
      const avg = calculateAverageOfTwelve(window);
      if (best === null || avg < best) {
        best = avg;
      }
    }
    return best;
  }

  function bestAverageOfHundred(times: number[]): number | null {
    if (times.length < 100) return null;

    let best: number | null = null;
    for (let i = 0; i <= times.length - 100; i++) {
      const window = times.slice(i, i + 100);
      const avg = calculateAverageOfHundred(window);
      if (best === null || avg < best) {
        best = avg;
      }
    }
    return best;
  }

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
          <View className="flex-1 rounded-lg bg-gray-800 p-2">
            <Text className="mb-2 text-gray-400">RECENT TIMES</Text>
            <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
              {[...times].reverse().map((time) => (
                <View key={time.id} className="mb-2 rounded bg-gray-500 p-1">
                  <Text className="text-xl font-semibold text-white">{formatTime(time.time)}</Text>
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
            <Text className="ml-1 text-2xl font-bold text-white">
              {times.length > 0 ? formatTime(Math.min(...times.map((time) => time.time))) : "-"}
            </Text>
          </View>

          {/* Current */}
          <View className="mb-3 rounded-lg bg-gray-800 p-2">
            <Text className="mb-2 text-gray-400">CURRENT</Text>
            <View className="ml-1">
              <Text className="mb-1 text-white">AO5</Text>
              <Text className="mb-2 text-2xl font-semibold text-white">
                {times.length >= 5
                  ? formatTime(calculateAverageOfFive(times.map((times) => times.time).slice(-5)))
                  : '-'}
              </Text>
              <Text className="mb-1 text-white">AO12</Text>
              <Text className="mb-2 text-2xl font-semibold text-white">
                {times.length >= 12
                  ? formatTime(
                      calculateAverageOfTwelve(times.map((times) => times.time).slice(-12))
                    )
                  : '-'}
              </Text>
              <Text className="mb-1 text-white">AO100</Text>
              <Text className="text-2xl font-semibold text-white">
                {times.length >= 100
                  ? formatTime(
                      calculateAverageOfHundred(times.map((times) => times.time).slice(-100))
                    )
                  : '-'}
              </Text>
            </View>
          </View>

          {/* Best */}
          <View className="mb-3 rounded-lg bg-gray-800 p-2">
            <Text className="mb-2 text-gray-400">BEST</Text>
            <View className="ml-1">
              <Text className="mb-1 text-white">AO5</Text>
              <Text className="mb-2 text-2xl font-semibold text-white">
                {times.length >= 5
                  ? formatTime(bestAverageOfFive(times.map((t) => t.time)) ?? 0)
                  : '-'}
              </Text>
              <Text className="mb-1 text-white">AO12</Text>
              <Text className="mb-2 text-2xl font-semibold text-white">
                {times.length >= 12
                  ? formatTime(bestAverageOfTwelve(times.map((t) => t.time)) ?? 0)
                  : '-'}
              </Text>
              <Text className="mb-1 text-white">AO100</Text>
              <Text className="text-2xl font-semibold text-white">
                {times.length >= 100
                  ? formatTime(bestAverageOfHundred(times.map((t) => t.time)) ?? 0)
                  : '-'}
              </Text>
            </View>
          </View>

          {/* Session Mean */}
          <View className="rounded-lg bg-gray-800 p-2">
            <Text className="mb-2 text-gray-400">SESSION MEAN</Text>
            <Text className="ml-1 text-2xl font-bold text-white">
              {times.length > 0
                ? formatTime(
                    Math.floor(
                      times.reduce(
                        (accumulator, currentValue) => accumulator + currentValue.time,
                        0
                      ) / times.length
                    )
                  )
                : '-'}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
