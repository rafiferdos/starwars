import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const films = () => {
  return (
    <View style={styles.containerStyle} >
      <Text>films</Text>
    </View>
  )
}

export default films

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#292929'
  }
})