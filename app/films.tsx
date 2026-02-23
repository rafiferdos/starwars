import { COLORS } from '@/constants/colors'
import { IFilms } from '@/types/films'
import React, { useEffect, useState } from 'react'
import { FlatList, RefreshControl, StyleSheet, Text, View } from 'react-native'

const Page = () => {
  const [films, setFilms] = useState<IFilms[]>([])
  const [loading, setLoading] = useState(false)
  const [refreshing, setRefreshing] = useState(false)

  const fetchFilms = async () => {
    setLoading(true)
    try {
      const response = await fetch('https://swapi.dev/api/films/')
      const data = await response.json()
      console.info("🚀 ~ fetchFilms ~ data:", data)
      setFilms(data.results)
    } catch (error) {
      console.error('Error fetching films:', error)
    } finally {
      setLoading(false)
      setRefreshing(false)
    }
  }

  useEffect(() => {
    fetchFilms()
  }, [])

  const onRefresh = () => {
    setRefreshing(true)
    fetchFilms()
  }

  return (
    <View style={styles.containerStyle}>
      <FlatList
        data={films}
        keyExtractor={(item) => item.episode_id.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              marginBottom: 20,
              padding: 15,
              backgroundColor: '#3a3a3a',
              borderRadius: 10
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#fff' }}>
              {item.title}
            </Text>
            <Text style={{ color: '#ccc' }}>Director: {item.director}</Text>
            <Text style={{ color: '#ccc' }}>
              Release Date: {item.release_date}
            </Text>
          </View>
        )}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={fetchFilms} tintColor={COLORS.gold} />}
        ListEmptyComponent={() => <Text style={{color: '#fff'}}>No films found.</Text>}
      />
    </View>
  )
}

export default Page

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#292929'
  }
})
