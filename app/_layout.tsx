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
        }
      }}
    >
      <Tabs.Screen name='index' options={{ href: null }} />
    </Tabs>
  )
}
