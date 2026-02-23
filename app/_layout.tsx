import { COLORS } from '@/constants/colors'
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
          borderTopWidth: 1,
        },
        tabBarActiveTintColor: COLORS.activeTab,
        tabBarInactiveTintColor: COLORS.inactiveTab,
      }}
    >
      <Tabs.Screen name='index' options={{ href: null }} />
    </Tabs>
  )
}
