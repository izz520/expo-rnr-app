import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const TabLayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" options={{
        tabBarLabel: 'Home',
        // tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
      }} />
      <Tabs.Screen name="Profile" options={{
        tabBarLabel: 'Profile',
        // tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />,
      }} />
    </Tabs>
  )
}

export default TabLayout