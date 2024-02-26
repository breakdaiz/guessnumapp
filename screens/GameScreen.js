import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Title from "../components/Title";
import Colors from "../constants/color";

export default function GameScreen({ title }) {
  return (
    <View style={styles.screen}>
      <Title> Opponent's guess</Title>
      <View>
        <Text>Higher or lower!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.accent500,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.accent500,
    padding: 12,
  },
});
