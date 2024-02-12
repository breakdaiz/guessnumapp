import { StyleSheet, View, TextInput, Button } from 'react-native'
import React from 'react'
import PrimaryButton from '../components/PrimaryButton'

export default function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput />
      <PrimaryButton> Reset</PrimaryButton>
      <PrimaryButton> Confirm</PrimaryButton>
    </View>
  )
}


const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 24,
        borderRadius: 8,
        marginTop: 100,
        padding: 16,
        backgroundColor: '#72063c',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25

    }

})