import {
  View,
  Text,
  Button,
  FlatList,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";
import TodoItem from "../components/TodoItem";

import { mainStyles } from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { loadTodos, saveTodos } from "../storage/todoStorage";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type TodoType = {
  id: string;
  title: string;
  completed: boolean;
};

export default function TodoListScreen() {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    const fetchTodos = async () => {
      const todosData = await loadTodos();
      setTodos(todosData);
    };

    fetchTodos();
  }, []);

  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  const addTodo = (title: string) => {
    setTodos((prev) => [
      ...prev,
      { id: Date.now().toString(), title, completed: false },
    ]);
    setTitle("");
  };

  const checkCompleted = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <KeyboardAvoidingView style={mainStyles.container}>
      <View style={{ marginVertical: 20 }}>
        <Text style={mainStyles.todoText}>
          You have {todos.length} tasks remaining
        </Text>
      </View>

      <View>
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <TodoItem
              todo={item}
              checkCompleted={checkCompleted}
              removeTodo={removeTodo}
            />
          )}
          keyExtractor={(item) => item.id}
          // ListEmptyComponent={() => <Text>No Data</Text>}
        />
      </View>

      <View style={mainStyles.inputWrapper}>
        <TextInput
          style={mainStyles.input}
          placeholder="Add new task"
          placeholderTextColor="#A0A0A0"
          value={title}
          onChangeText={setTitle}
        />
        <TouchableOpacity
          style={mainStyles.buttonSmall}
          onPress={() => addTodo(title)}
        >
          <AntDesign name="arrow-right" size={24} color="#fff" fontSize={20} />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
