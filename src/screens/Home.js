import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Home = ({ navigation }) => (
  <View style={styles.container}>
    <Text accessibilityRole="heading">Welcome to the Trivia Challenge!</Text>
    <Text accessibilityRole="heading" aria-level="2">
      You will be presented with 10 True of False Questions
    </Text>
    <Text accessibilityRole="heading" aria-level="3">
      Can you score 100%
    </Text>
    <Text
      accessibilityRole="button"
      onPress={() => navigation.navigate("Quiz")}
    >
      Begin
    </Text>
    <StatusBar style="auto" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
