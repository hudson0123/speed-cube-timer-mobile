import { Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { View } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs initialRouteName="timer" screenOptions={{
        tabBarActiveTintColor: 'white', 
        headerShown: false,
        tabBarBackground: () => {
          return (
            <View style={{ backgroundColor: '#1F2937', flex: 1 }} />
          );
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '500',
          marginTop: 5,
        },
        
        // Icon styling
        tabBarIconStyle: {
          marginBottom: -5,
        },
        
        // Individual tab styling
        tabBarItemStyle: {
          paddingVertical: 5,
        },
      }}>
      <Tabs.Screen
        name="timer"
        options={{
          title: 'Timer',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="clock-o" color={color} />,
        }}
      />
      <Tabs.Screen
        name="stats"
        options={{
          title: 'Stats',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="bar-chart" color={color} />,
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: 'Account',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />,
        }}
      />
    </Tabs>
  )
}