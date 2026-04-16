import Scrollable from "./wrappers/Scrollable";
import Title from "./components/Title";
import ButtonNativo from "./components/ButtonNativo";
import ButtonCustom from "./components/ButtonCustom";
import TextField from "./TextField";
import { Text } from "react-native";
import { globalStyles } from "./styles/globalStyles";

export default function App() {
  return (
    <Scrollable>
      <Title></Title>
      <TextField>
        <Text style={globalStyles.caption}>Alguns botões simples:</Text>
        <Text style={globalStyles.paragraph}>
          É possível utilizar botões nativos (bastante limitados), ou criar
          botões personalizados utilizando o "Pressable"
        </Text>
      </TextField>
      <ButtonNativo isDisabled={false}></ButtonNativo>
      <ButtonNativo isDisabled={true}></ButtonNativo>
      <ButtonCustom></ButtonCustom>
    </Scrollable>
  );
}
