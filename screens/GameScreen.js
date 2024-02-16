import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function GameScreen() {
  return (
    <View style={styles.screen}>
      <Text>Opponent's guess </Text>
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
});
