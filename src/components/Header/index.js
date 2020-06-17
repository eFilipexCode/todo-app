import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import styles from './styles.js';
import { useNavigation } from '@react-navigation/native';

const Header = (props) => {

    const navigation = useNavigation();
    function handleNavigateToAddTodo() {
        navigation.navigate('AddTodo');
    };

    return (
        <View style={styles.headerContainer}>
            <Text style={styles.textHeader}>Todo App</Text>
            <TouchableOpacity onPress={handleNavigateToAddTodo}>
                <Icon name="plus" color='#fff' size={25} />
            </TouchableOpacity>
        </View>
    );
}

export default Header;