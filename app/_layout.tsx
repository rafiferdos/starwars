import { COLORS } from '@/constants/colors'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
import Ionicons from '@expo/vector-icons/Ionicons'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { Tabs } from 'expo-router'

export default function RootLayout() {
  return (
    <Tabs
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
        tabBarStyle: {
          backgroundColor: COLORS.tabBar,
          borderTopColor: COLORS.dark,
          borderTopWidth: 1
        },
        tabBarActiveTintColor: COLORS.activeTab,
        tabBarInactiveTintColor: COLORS.inactiveTab
      }}
    >
      <Tabs.Screen name='index' options={{ href: null }} />
      <Tabs.Screen
        name='films'
        options={{
          animation: 'fade',
          title: 'Films & Movies',
          tabBarLabel: 'Films',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='film' size={size} color={color} />
          )
        }}
      />
      <Tabs.Screen
        name='people'
        options={{
          animation: 'fade',
          title: 'All Characters',
          tabBarLabel: 'People',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name='people-group' size={size} color={color} />
          )
        }}
      />
      <Tabs.Screen
        name='favorites'
        options={{
          animation: 'fade',
          title: 'Favorites',
          tabBarLabel: 'Favorites',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name='favorite' size={size} color={color} />
          )
        }}
      />
    </Tabs>
  )
}
