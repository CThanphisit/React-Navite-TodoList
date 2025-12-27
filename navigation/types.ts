export type RootStackParamList = {
  TodoList:
    | {
        newTodo?: {
          id: string;
          title: string;
          completed: boolean;
        };
      }
    | undefined;
  AddTodo: {
    onAdd: (title: string) => void;
  };
};
