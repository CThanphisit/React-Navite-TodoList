import { StyleSheet } from "react-native";

export const mainStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 10,
  },

  inputWrapper: {
    flexDirection: "row",
    backgroundColor: "#1E1E1E",
    borderRadius: 25,
    paddingLeft: 20,
    alignItems: "center",
    height: 50,
    width: "100%",
    overflow: "hidden",
    marginVertical: 20,
  },

  input: {
    flex: 1,
    color: "#FFFFFF",
    fontSize: 16,
  },

  buttonSmall: {
    backgroundColor: "#BB86FC",
    height: "100%",
    width: 60,
    justifyContent: "center",
    alignItems: "center",
  },

  todoItem: {
    padding: 10,
    borderWidth: 1,
    backgroundColor: "#252525",
    borderColor: "#333333",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 16,
    marginVertical: 5,
  },

  todoText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 18,
  },
});
