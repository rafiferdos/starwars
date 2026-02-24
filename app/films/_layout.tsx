import { COLORS } from '@/constants/colors'
import { Stack } from 'expo-router'
import React from 'react'

const Layout = () => {
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: COLORS.dark
        },
        headerTintColor: COLORS.gold,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold'
        },
        contentStyle: {
          backgroundColor: COLORS.dark
        }
      }}
    >
      <Stack.Screen name='index' options={{ title: 'All Films' }} />
      <Stack.Screen name='[id]' options={{ title: 'Film Details' }} />
    </Stack>
  )
}

export default Layout
