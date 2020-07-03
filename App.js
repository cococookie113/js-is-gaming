import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Swiper from "react-native-swiper";

import IsGaming from "./IsGaming";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" backgroundColor="#F0F1F6" />
      <View
        style={{
          flex: 0.1,
          backgroundColor: "#F0F1F6",
          borderBottomWidth: 1,
          borderBottomColor: "#01ABB9",
        }}
      >
        <Text style={styles.topText}>Who is gaming now?</Text>
      </View>
      <View style={styles.content}>
        <IsGaming />
      </View>
      <View
        style={{
          ...styles.nav,
          borderTopWidth: 1,
          borderTopColor: "#01ABB9",
        }}
      >
        <Text>Nav</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topText: {
    fontWeight: "bold",
    color: "#595B5A",
    fontSize: 30,
    paddingTop: 30,
  },
  content: {
    flex: 0.82,
    backgroundColor: "#F0F1F6",
  },
  nav: {
    flex: 0.08,
    backgroundColor: "#F0F1F6",
  },
});
