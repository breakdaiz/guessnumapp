import { StyleSheet, View, TextInput, Button } from "react-native";
import React from "react";
import PrimaryButton from "../components/PrimaryButton";

export default function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        keyboardType='number-pad'
        maxLength={2}
        style={styles.numberInput}
        autoCapitalize='none'
        autoCorrect={false}
      />
      <PrimaryButton> Reset</PrimaryButton>
      <PrimaryButton> Confirm</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 24,
    borderRadius: 8,
    marginTop: 100,
    padding: 16,
    backgroundColor: "#4e0329",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    color: "#ddb52f",
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
});
