import React, { Component } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import Swiper from "react-native-swiper";

import IsGaming from "./IsGaming";

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
  },

  text: {
    color: "#fff",
    fontSize: 100,
    fontWeight: "bold",
  },
});

export default class SwiperComponent extends Component {
  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons={true}>
        <View style={styles.slide}>
          <IsGaming />
        </View>
        <View style={styles.slide}>
          <Text style={styles.text}>Beaut1iful</Text>
        </View>
      </Swiper>
    );
  }
}
