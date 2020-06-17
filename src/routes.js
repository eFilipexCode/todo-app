import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Todo from './pages/Todo';
import AddTodo from './pages/AddTodo';

const Stack = createStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode="none" initialRouteName="Home" >
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Todo" component={Todo}/>
                <Stack.Screen name="AddTodo" component={AddTodo}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;