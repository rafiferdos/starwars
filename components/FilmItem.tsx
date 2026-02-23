import { IFilms } from '@/types/films'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const FilmItem: React.FC<{ item: IFilms }> = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{item.title}</Text>
      <Text style={{ color: '#ccc' }}>Director: {item.director}</Text>
      <Text style={{ color: '#ccc' }}>Release Date: {item.release_date}</Text>
    </View>
  )
}

export default FilmItem

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: '#d4af37',
    fontWeight: 'bold'
  },
  container: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#3a3a3a',
    borderRadius: 10
  }
})
