import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types";

import TodoListScreen from "../screens/TodoListScreen";
import AddTodoScreen from "../screens/AddTodoScreen";

export const RootStack = createNativeStackNavigator<RootStackParamList>({
  screens: {
    TodoList: {
      screen: TodoListScreen,
      options: {
        title: "Todo List",
      },
    },
    AddTodo: {
      screen: AddTodoScreen,
      options: {
        title: "Add Todo",
      },
    },
  },
});
