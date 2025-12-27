import { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../navigation/types";

type AddTodoNavProp = NativeStackNavigationProp<RootStackParamList, "AddTodo">;

export default function AddTodoScreen() {
  const navigation = useNavigation<AddTodoNavProp>();
  const [title, setTitle] = useState("");

  const route = useRoute<any>();

  const saveTodo = () => {
    route.params?.onAdd(title);
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1 }}>
      <Text>AddTodoScreen</Text>
      <TextInput
        style={{ borderWidth: 1, margin: 10, padding: 10 }}
        placeholder="Title Todo"
        value={title}
        onChangeText={setTitle}
      />
      <Button title="Save Todo" onPress={saveTodo} />
    </View>
  );
}
