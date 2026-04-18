import Scrollable from "./components/Wrappers/Scrollable";
import Title from "./components/Title";
import ButtonNativo from "./components/Buttons/ButtonNativo";
import TextField from "./components/TextField";
import CustomButton from "./components/Buttons/CustomButton";
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
      <CustomButton text="Button customizado!"></CustomButton>
      <CustomButton text="Cor personalizada" color="#676ec3"></CustomButton>
    </Scrollable>
  );
}
