import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface IListEmptyProps {
  loading: boolean
  message?: string
}

const ListEmpty = ({loading, message = 'No items found'}: IListEmptyProps) => {
  return (
    <View style={styles.emptyContainer}>
      <Text style={styles.text}>{message}</Text>
    </View>
  )
}

export default ListEmpty

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    height: '100%'
  },
  text: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center'
  }
})