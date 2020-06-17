import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles.js';
import Emoji from 'react-native-emoji';
import AsyncStorage from '@react-native-community/async-storage';

const TodoContainer = (props) => {

  async function getItems() {
    const keys = await AsyncStorage.getAllKeys();
    const todos = [];
    for (let i in keys) {
      const itemValue = await AsyncStorage.getItem(keys[i]);
      const parsedItem = JSON.parse(itemValue);
      parsedItem.key = keys[i];
      todos.push(parsedItem);
    };
    return todos
  };

  async function handleDeleteTodo() {
    const key = props.todo.key;
    await AsyncStorage.removeItem(key);
    props.todosArray();
  };

  async function handleUpdateTodo() {
    const updateModel = {
      key: props.todo.key,
      title: props.todo.title,
      desc: props.todo.desc,
      done: true,
    };

    await AsyncStorage.mergeItem(props.todo.key, JSON.stringify(updateModel));
    props.todosArray();
  };

  return (
    <View style={styles.todoContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.todoTitle}>{props.todo.title}</Text>
        <Text style={styles.todoDescription}>{props.todo.desc}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        {
          !props.todo.done && (
            <TouchableOpacity onPress={handleUpdateTodo} style={[styles.buttons, styles.doneButton]}>
              <Text style={[styles.buttonsText, styles.doneTextButton]}>
                Feito
              </Text>
              <Emoji name="sunglasses" />
            </TouchableOpacity>
          )
        }
        <TouchableOpacity onPress={handleDeleteTodo} style={styles.buttons}>
          <Text style={styles.buttonsText}>Deletar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default TodoContainer;