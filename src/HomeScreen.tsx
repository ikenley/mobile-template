import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types";
import Api from "./Api";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export const Foo = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Open the pod bay doors, HAL.</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          navigation.navigate("Details", { itemId: 12345 });
        }}
      />
      <Api />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Foo;
