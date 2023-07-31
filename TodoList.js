// 'useState' is a hook used to managing state of components.
// Use React as the main library to build components.
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

// Define React component. A functional component.
const TodoList = () => {
  //  Set up state: the task state holds the the val of the input field,
  //  where the user can type in the new task to be added.
  //  The setTask function is used to update the 'task' state.
  //  The 'task' state is an array that holds the list of task.
  // Then the setTasks function updates the 'task' array.
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  // Add a task.
  const handleAddTask = () => {
    if (task.trim() === '') {
      // Check if 'task' is an empty string.
      return; // returns do nothing if it is an empty string.
    }

    // If 'task' is not an empty string.
    // Use setTasks function to add the new'task' into the task array.
    setTasks(prevTasks => [...prevTasks, task]);
    // Resets the state of the 'task' to an empty string after adding the task to clear the input field.
    setTask('');
  };

  // Delete a task from the list, takes an 'index' as a parameter.
  // Indicates the index of the task to be deleted.
  const handleDeleteTask = index => {
    const updatedTasks = [...tasks]; // Create a copy of the 'tasks' array using the spread operator(avoid directly modifying the state)
    updatedTasks.splice(index, 1); // Use splice to remove the task at the given index.
    setTasks(updatedTasks); // Update the state of the task.
  };

  // Render the component. Input field: TextInput
  return (
    <View style={styles.container}>
      <Text style={styles.title}>To-Do List</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a task"
          value={task}
          onChangeText={setTask}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
      {tasks.map((task, index) => (
        <TouchableOpacity
          key={index}
          style={styles.taskItem}
          onPress={() => handleDeleteTask(index)}>
          <Text style={styles.itemNumber}>{index + 1}</Text>
          <Text style={styles.itemText}>{task}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

// Style the component. The styles object use 'StyleSheet.create()' to define CSS-like styles for components.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  addButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
  },
  taskItem: {
    backgroundColor: 'lightgray',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    flexDirection: 'row',
  },
  itemNumber: {
    marginRight: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemText: {
    fontSize: 16,
  },
});

// Exporting the component.
export default TodoList;
