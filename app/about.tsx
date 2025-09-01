import React from 'react';
import { View, Text, Image } from 'react-native';

export default function About() {
  return (
    <View className="flex-1 items-center justify-between bg-black px-6 py-10">
      {/* Top Rubik's Cube Image */}
      <Image
        source={{ uri: 'https://pngimg.com/uploads/rubik_cube/small/rubik_cube_PNG5.png' }}
        className="w-64 h-64 rotate-45 mt-16"
        resizeMode="contain"
      />

      {/* About Content */}
      <View className="flex-1 items-center justify-bottom mt-10">
        <Text className="text-3xl font-bold text-center mb-10 -mt-6 text-white">
          A timer built for speedcubers
        </Text>
        <Text className="text-lg text-white text-center">
          This app was built by speedcubers, for speedcubers. We know the thrill of chasing personal
          bests, the grind of daily practice, and the importance of tools that truly support the
          community. That’s why our focus is on creating a timer that grows and improves through
          your feedback. Every feature, update, and improvement is shaped by the people who use it.
        </Text>
      </View>

      {/* Footer */}
      <Text className="text-sm text-gray-400 mt-10">
        © {new Date().getFullYear()} CubeTimer. All rights reserved.
      </Text>
    </View>
  );
}
