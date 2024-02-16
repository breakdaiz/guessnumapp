import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Title from "../components/Title";

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
    color: "#ddb52f",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#ddb52f",
    padding: 12,
  },
});
