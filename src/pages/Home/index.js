import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles.js';
import { useNavigation } from '@react-navigation/native';
import Emoji from 'react-native-emoji';

const Home = () => {

    const navigate = useNavigation();
    function handleNavigateToTodo() {
        navigate.navigate('Todo');
    };

    return (
        <View style={styles.homeContainer}>
            <Text style={styles.mainText}>
                Organize seu dia a dia
                <Emoji name='writing_hand' />
            </Text>
            <Text style={styles.descriptionText}>
                Nós te ajudamos a organizar seu tempo!
            </Text>
            <TouchableOpacity activeOpacity={0.6} onPress={handleNavigateToTodo} style={styles.enterButton}>
                <Text style={styles.textButton}>
                    Entrar!
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default Home;