import React, { Component } from "react";
import { SafeAreaView, FlatList, StyleSheet, Text, View } from "react-native";

export default class IsGaming extends Component {
  state = {
    categories: [],
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            flex: 0.13,
            borderBottomWidth: 1,
            borderBottomColor: "#30d0b7",
          }}
        >
          <Text style={styles.topText}>Are you playin' LoL?</Text>
        </View>
        <FlatList style={styles.container}>
          <View
            style={{
              flex: 0.87,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>Home!</Text>
          </View>
        </FlatList>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f2f2f2",
  },
  text: {
    fontSize: 100,
  },
  topText: {
    fontWeight: "bold",
    color: "#595B5A",
    fontSize: 30,
    paddingTop: 36,
    paddingLeft: 8,
  },
});
