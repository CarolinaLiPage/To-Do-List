import React from "react";
import { View, StyleSheet } from "react-native";
import TodoApp from "./TodoApp";

const App = () => {
	return (
		<View style={styles.container}>
			<TodoApp />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#f0f0f0",
	},
});

export default App;
