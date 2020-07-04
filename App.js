import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Swiper from "react-native-swiper";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import IsGaming from "./components/IsGaming";

function Ranking() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>ranks</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" backgroundColor="#F0F1F6" />

      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = focused
                  ? "ios-information-circle"
                  : "ios-information-circle-outline";
              } else if (route.name === "Settings") {
                iconName = focused ? "ios-list-box" : "ios-list";
              } else if (route.name === "Ranking") {
                iconName = focused ? "ios-nuclear" : "ios-pin";
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: "#30D0B7",
            inactiveTintColor: "#595B5A",
          }}
        >
          <Tab.Screen name="Home" component={IsGaming} />
          <Tab.Screen name="Ranking" component={Ranking} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
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
