import { COLORS } from '@/constants/colors'
import React from 'react'
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
} from 'react-native'

interface IListEmptyProps {
  loading: boolean
  message?: string
}

const ListEmpty = ({
  loading,
  message = 'No items found'
}: IListEmptyProps) => {
  return (
    <View style={[styles.emptyContainer]}>
      {loading ?
        <ActivityIndicator size='large' color={COLORS.gold} />
      : <Text style={styles.text}>{message}</Text>}
    </View>
  )
}

export default ListEmpty

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 400
  },
  text: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center'
  }
})
