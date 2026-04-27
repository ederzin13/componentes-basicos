import { View, Text } from "react-native";
import React, { useState } from "react";

export default function Switch() {
	const [isEnabled, setIsEnabled] = useState<boolean>(false);

	const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

	return (
		<View>
			<Switch></Switch>
		</View>
	);
}
