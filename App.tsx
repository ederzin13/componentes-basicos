import Scrollable from "./wrappers/Scrollable";
import Title from "./components/Title";
import ButtonNativo from "./components/ButtonNativo";
import ButtonCustom from "./ButtonCustom";

export default function App() {
  return (
    <Scrollable>
      <Title></Title>
      <ButtonNativo isDisabled={false}></ButtonNativo>
      <ButtonNativo isDisabled={true}></ButtonNativo>
      <ButtonCustom></ButtonCustom>
    </Scrollable>
  );
}
