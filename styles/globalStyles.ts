import { StyleSheet } from "react-native";

//todos os estilos do app ficam aqui
export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fcf4e6",
    alignItems: "center",
    gap: 20,
  },

  title: {
    padding: 20,
    fontSize: 30,
    fontWeight: "bold",
  },

  customButton: {
    padding: 15,
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  whiteText: {
    color: "#fcf4e6",
  },

  caption: {
    fontSize: 20,
    fontWeight: "heavy",
  },

  paragraph: {
    fontSize: 15,
  },

  textFieldContainer: {
    padding: 15,
    gap: 5,
    backgroundColor: "#eae2d5",
    borderRadius: 5,
    width: 300,
  },
});
