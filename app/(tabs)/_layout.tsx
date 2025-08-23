import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs initialRouteName="timer" screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="timer"
        options={{
          title: 'Timer',
        }}
      />
      <Tabs.Screen
        name="stats"
        options={{
          title: 'Stats'
        }}
      />
    </Tabs>
  )
}