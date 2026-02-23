import { IFilms } from '@/types/films'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const FilmItem = () => {
  return (
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
      <Text style={{ color: '#ccc' }}>Release Date: {item.release_date}</Text>
    </View>
  )
}

export default FilmItem

const styles = StyleSheet.create({})
