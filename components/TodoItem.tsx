import { View, Text, TouchableOpacity } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function TodoItem({ todo, checkCompleted }: any) {
  return (
    <View
      style={{
        padding: 10,
        borderWidth: 1,
        margin: 10,
        backgroundColor: "#F8F9FA",
      }}
    >
      <BouncyCheckbox
        size={25}
        fillColor="red"
        unFillColor="#FFFFFF"
        text={todo.title}
        iconStyle={{ borderColor: "red" }}
        innerIconStyle={{ borderWidth: 2 }}
        onPress={(isChecked: boolean) => {
          checkCompleted(todo.id);
        }}
      />
      <Text style={{ color: "#fff", fontWeight: "600" }}>{todo.title}</Text>
    </View>
  );
}
