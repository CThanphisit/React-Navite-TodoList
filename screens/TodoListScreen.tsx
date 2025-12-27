import {
  View,
  Text,
  Button,
  FlatList,
  KeyboardAvoidingView,
} from "react-native";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import TodoItem from "../components/TodoItem";
import { useRoute } from "@react-navigation/native";

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "TodoList">;
type TodoListRouteProp = RouteProp<RootStackParamList, "TodoList">;

type dataProps = {
  id: string;
  title: string;
  completed: boolean;
};

export default function TodoListScreen() {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<TodoListRouteProp>();

  const [todos, setTodos] = useState<dataProps[]>([]);

  const addTodo = (title: string) => {
    setTodos((prev) => [
      ...prev,
      { id: Date.now().toString(), title, completed: false },
    ]);
  };

  const checkCompleted = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <View style={{ flex: 1, marginVertical: 20 }}>
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <TodoItem todo={item} checkCompleted={checkCompleted} />
          )}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={() => <Text>No Data</Text>}
        />
        <Button
          title="Add Todo"
          onPress={() => navigation.navigate("AddTodo", { onAdd: addTodo })}
        />
      </View>
    </KeyboardAvoidingView>
  );
}
