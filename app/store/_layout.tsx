import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '../../constants/Colors'

export default function _layout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: Colors.Primary
    }}>
      <Tabs.Screen name="index"
      options={{
        tabBarLabel: "Home",
        tabBarIcon: ({color})=><Ionicons name="home" size={24} color={color} />
      }}
      />
      <Tabs.Screen name="details"
      options={{
        tabBarLabel: "Details",
        tabBarIcon: ({color})=><Ionicons name="search" size={24} color={color} />
      }}
      />
    </Tabs>
  )
}