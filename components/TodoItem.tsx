import { View, Text, TouchableOpacity, Pressable } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { AntDesign } from "@expo/vector-icons";
import { mainStyles } from "../screens/styles";

export default function TodoItem({ todo, checkCompleted, removeTodo }: any) {
  return (
    <View style={mainStyles.todoItem}>
      <View style={{ flexDirection: "row", alignContent: "center" }}>
        <BouncyCheckbox
          size={25}
          fillColor="#03DAC6"
          innerIconStyle={{ borderWidth: 2 }}
          onPress={(isChecked: boolean) => {
            checkCompleted(todo.id);
          }}
        />
        <Text
          style={{
            color: todo.completed ? "#A0A0A0" : "#FFFFFF",
            fontWeight: "600",
            fontSize: 18,
            textDecorationLine: todo.completed ? "underline" : "none",
          }}
        >
          {todo.title}
        </Text>
      </View>
      <Pressable onPress={() => removeTodo(todo.id)}>
        <AntDesign name="delete" size={24} color="#CF6679" fontSize={20} />
      </Pressable>
    </View>
  );
}
