import Scrollable from "./components/Wrappers/Scrollable";
import Title from "./components/Title";
import Buttons from "./components/Sections/Buttons";
import Inputs from "./components/Sections/Inputs";
import Img from "./components/SideScroll/Img";
import SideScroll from "./components/SideScroll/SideScroll";

export default function App() {
  return (
    <Scrollable>
      <Title></Title>
      <Buttons></Buttons>
      <SideScroll></SideScroll>
      <Inputs></Inputs>
    </Scrollable>
  );
}
