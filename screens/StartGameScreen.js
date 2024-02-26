import { StyleSheet, View, TextInput, Alert } from "react-native";
import React, { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
import Colors from "../constants/color";

export default function StartGameScreen({ onPickedNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  const numberInputHandler = enteredText => {
    console.log("enteredText", enteredText);

    setEnteredNumber(enteredText);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      // show alert ...
      Alert.alert(
        "Invalid Number",
        "Number has to be a number bewtween 1 and 99.",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    } else {
      onPickedNumber(chosenNumber);
      console.log("Valid number! ", chosenNumber);
    }
  };
  const resetInputHandler = () => {
    setEnteredNumber("");
    console.log("resetInputHandler");
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        keyboardType='number-pad'
        maxLength={2}
        style={styles.numberInput}
        autoCapitalize='none'
        autoCorrect={false}
        value={enteredNumber}
        onChangeText={numberInputHandler}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 24,
    borderRadius: 8,
    marginTop: 100,
    padding: 16,
    backgroundColor: Colors.primary800,
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
    color: Colors.accent500,
    borderBottomColor: "",
    borderBottomWidth: 2,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    marginVertical: 16,
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
