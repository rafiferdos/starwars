import { IFilms } from '@/types/films'
import { useLocalSearchParams } from 'expo-router'
import React, { useEffect, useState } from 'react'
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native'

const Page = () => {
  const id = useLocalSearchParams()
  const [film, setFilm] = useState<IFilms | null>(null)
  console.log('🚀 ~ Details ~ film:', film)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchFilmDetails = async () => {
      setLoading(true)
      try {
        const response = await fetch(`https://swapi.dev/api/films/${id}/`)
        const data = await response.json()
        setFilm(data)
      } catch (error) {
        console.error('Error fetching film details:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchFilmDetails()
  }, [id])

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#1a1a1a' }}>
      {loading ?
        <View style={styles.loadingContainer}>
          <ActivityIndicator size='large' color='#fff' />
        </View>
      : film ?
        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>
            {film.title}
          </Text>
          <Text style={{ fontSize: 16, marginBottom: 5 }}>
            Director: {film.director}
          </Text>
          <Text style={{ fontSize: 16, marginBottom: 5 }}>
            Producer: {film.producer}
          </Text>
          <Text style={{ fontSize: 16, marginBottom: 5 }}>
            Release Date: {film.release_date}
          </Text>
          <Text style={{ fontSize: 16, marginTop: 10 }}>
            {film.opening_crawl}
          </Text>
        </View>
      : <View style={styles.loadingContainer}>
          <Text style={{ color: '#fff' }}>Film not found</Text>
        </View>
      }
    </ScrollView>
  )
}

export default Page

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
