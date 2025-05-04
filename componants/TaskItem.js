import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  FlatList,
  Alert,
} from "react-native";

import { saveTaskToStorage, loadTasksFromStorage } from "../utils/Storage";

const TaskItem = () => {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");

  useEffect(() => {
    const fetchTasks = async () => {
      const loadedTasks = await loadTasksFromStorage();
      setTasks(loadedTasks);
    };
    fetchTasks();
  }, []);

  useEffect(() => {
    saveTaskToStorage(tasks);
  }, [tasks]);

  const addTasks = () => {
    if (taskText.trim() === "") return Alert.alert("Error", "Enter tasks");

    const newTask = {
      id: Date.now().toString(),
      title: taskText,
    };

    setTasks([...tasks, newTask]), setTaskText("");
  };

  const deleteTask = (id) => {
    Alert.alert("Delete Task!", "Are you sure you want to delete this task ?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Delete",
        style: "destructive",
        onPress: () => {
          const updatedTasks = tasks.filter((task) => task.id !== id);
          setTasks(updatedTasks);
        },
      },
    ]);
  };

  const renderTask = ({ item }) => (
    <View style={styles.task}>
      <View style={{ width: 250, margin: 5 }}>
        <Text style={styles.text}>{item.title}</Text>
      </View>

      <View>
        <TouchableOpacity
          style={styles.deleteBtn}
          onPress={() => deleteTask(item.id)}
        >
          <Text>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1, marginBottom: 20 }}>
      <View style={styles.container}>
        <Text style={styles.heading}>Task Maanager </Text>
        <View style={styles.flex}>
          <TextInput
            placeholder="Enter new task..."
            style={styles.input}
            value={taskText}
            onChangeText={setTaskText}
          />
          <TouchableOpacity style={styles.button} onPress={addTasks}>
            <Text>ADD</Text>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={tasks}
        renderItem={renderTask}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text style={styles.emptyText}>Empty tasks</Text>}
      />
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop:50,
    marginBottom:40
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    // marginTop: 60,
  },
  input: {
    height: 50,
    width: 300,
    borderRadius: 8,
    borderWidth: 1.5,
    paddingHorizontal: 10,
  },
  flex: {
    height: 53,
    width: 400,
    marginLeft: 5,
    flexDirection: "row",
    marginTop: 40,
    borderRadius: 8,
    borderWidth: 1.5,
  },
  button: {
    height: 50,
    backgroundColor: "#1e90ff",
    width: 90,
    color: "red",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 7,
    borderRadius: 8,
    elevation: 8,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 16,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  task: {
    flex: 1,
    height: "auto",
    width: "400",
    marginTop: 20,
    backgroundColor: "#99AAAB",
    borderRadius: 8,
    paddingHorizontal: 5,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
  },
  emptyText: {
    // marginTop: 40,
    marginLeft: 20,
    fontSize: 20,
    color: "#EA7773",
    backgroundColor: "#EAF0F1",
    marginRight: 15,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontWeight: "bold",
    textAlign: "center",
    // textAlignVertical: "center",
  },
  deleteBtn: {
    height: 40,
    width: 65,
    marginTop: 3,
    marginLeft: 60,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
});

export default TaskItem;
