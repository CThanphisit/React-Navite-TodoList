import React from "react";
import { View, Text } from "react-native";

export default function DetailScreen({ route }: any) {
  return (
    <View>
      <Text>Detail Screen</Text>
      <Text>ID: {route.params?.id}</Text>
    </View>
  );
}
