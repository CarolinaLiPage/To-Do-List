// 'useState' is a hook used to managing state of components.
// Use React as the main library to build components.
import React, { useState } from "react";

// Define React component. A functional component.
const TodoList = () => {
	//  Set up state: the task state holds the the val of the input field,
	//  where the user can type in the new task to be added.
	//  The setTask function is used to update the 'task' state.
	//  The 'task' state is an array that holds the list of task.
	// Then the setTasks function updates the 'task' array.
	const [task, setTask] = useState("");
	const [tasks, setTasks] = useState([]);

	const handleChanges = (e) => {
		setTask(e.target.value);
	};

	// Add a task.
	const handleAddTask = (e) => {
		e.preventDefault();
		if (task.trim() === "") {
			// Check if 'task' is an empty string.
			return; // returns do nothing if it is an empty string.
		}

		// If 'task' is not an empty string.
		// Use setTasks function to add the new'task' into the task array.
		setTasks((prevTasks) => [...prevTasks, task]);
		// Resets the state of the 'task' to an empty string after adding the task to clear the input field.
		setTask("");
	};

	// Delete a task from the list, takes an 'index' as a parameter.
	// Indicates the index of the task to be deleted.
	const handleDeleteTask = (index) => {
		const updatedTasks = [...tasks]; // Create a copy of the 'tasks' array using the spread operator(avoid directly modifying the state)
		updatedTasks.splice(index, 1); // Use splice to remove the task at the given index.
		setTasks(updatedTasks); // Update the state of the task.
	};

	return (
		<div className="container">
			<h1 className="title">To-Do List</h1>
			<form onSubmit={handleAddTask}>
				<input
					className="input"
					type="text"
					name="task"
					placeholder="Add a task"
					value={task}
					onChange={handleChanges}
				/>
				<button className="addButton addButtonText">Add</button>
			</form>
			{tasks.map((task, index) => (
				<div className="taskItem" onClick={() => handleDeleteTask(index)}>
					<p className="itemNumber">{index + 1}</p>
					<p className="itemText">{task}</p>
				</div>
			))}
		</div>
	);
};

export default TodoList;
