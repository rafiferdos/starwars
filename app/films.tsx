import FilmItem from '@/components/FilmItem'
import ListEmpty from '@/components/ListEmpty'
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
    // fetchFilms()
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
        renderItem={({ item }) => <FilmItem />}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={fetchFilms} tintColor={COLORS.gold} />}
        ListEmptyComponent={() => <ListEmpty loading={loading} message="No films found" />}
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
