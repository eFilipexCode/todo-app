import React, { useState, useEffect } from 'react';
import { SectionList, Text, View, Image } from 'react-native';
import Header from '../../components/Header';
import TodoContainer from '../../components/TodoContainer';
import AsyncStorage from '@react-native-community/async-storage';
import styles from './styles.js';
import imageNoTodo from '../../assets/no_todos.png';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [doneTodos, setDoneTodos] = useState([]);

  async function getItems() {
    const keys = await AsyncStorage.getAllKeys();
    const todos = [];
    const doneTodos = [];

    for (let i in keys) {
      const itemValue = await AsyncStorage.getItem(keys[i]);
      const parsedItem = JSON.parse(itemValue);
      parsedItem.key = keys[i];
      if (!parsedItem.done) {
        todos.push(parsedItem);
      } else {
        doneTodos.push(parsedItem);
      };
    };
    setTodos(todos);
    setDoneTodos(doneTodos);
  };

  useEffect(() => {
    getItems();
  }, []);

  const renderItem = ({ item }) => <TodoContainer todo={item} todosArray={getItems} />
  const renderSectionHeader = ({ section }) => <Text style={styles.sectionTitle}>{section.title}</Text>;

  return (
    <View style={styles.container}>
      <Header functionToAddTodo={getItems} />
      {
        todos.length === 0 && doneTodos.length === 0
          ? <Text style={styles.noTodos}>Vazio! Parece que você não tem nehum afazer...</Text>
          : <SectionList
              showsVerticalScrollIndicator={false}
              sections={[{
                title: 'Afazeres incompletos:',
                data: todos
              },
              {
                title: 'Afazeres completos:',
                data: doneTodos
              }]}
              renderItem={renderItem}
              renderSectionHeader={renderSectionHeader}
            />
      }
    </View>
  );
};

export default Todo;