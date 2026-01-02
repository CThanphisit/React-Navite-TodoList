import AsyncStorage from "@react-native-async-storage/async-storage";
import { TodoType } from "../screens/TodoListScreen";

const TODO_KEY = "todos";

export const loadTodos = async (): Promise<TodoType[]> => {
  const json = await AsyncStorage.getItem(TODO_KEY);
  return json ? JSON.parse(json) : [];
};

export const saveTodos = async (todos: TodoType[]) => {
  await AsyncStorage.setItem(TODO_KEY, JSON.stringify(todos));
  const value = await AsyncStorage.getItem(TODO_KEY);
};
