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

  buttonCustom: {
    height: 50,
    width: 90,
    borderRadius: 10,
    backgroundColor: "#5d513b",
    alignItems: "center",
    justifyContent: "center",
  },

  whiteText: {
    color: "#fcf4e6",
  },
});
