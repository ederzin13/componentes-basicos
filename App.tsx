import Scrollable from "./components/Wrappers/Scrollable";
import Title from "./components/Title";
import Buttons from "./components/Sections/Buttons";
import Inputs from "./components/Sections/Inputs";

export default function App() {
	return (
		<Scrollable>
			<Title></Title>
			<Buttons></Buttons>
			<Inputs></Inputs>
		</Scrollable>
	);
}
