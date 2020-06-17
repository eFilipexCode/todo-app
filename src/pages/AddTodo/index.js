import React, { useState } from 'react';
import { View, TouchableOpacity, TextInput, Text, Alert, KeyboardAvoidingView } from 'react-native';
import styles from './styles.js';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation, CommonActions, StackActions, NavigationActions } from '@react-navigation/native';

const AddTodo = () => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [ableToSubmit, setAbleToSubmit] = useState(false);

    const navigate = useNavigation();

    async function setNewTodoItem() {
        if (!title)
            return;

        if (title > 25)
            return;

        if (!ableToSubmit)
            return;

        try {
            let keys = await AsyncStorage.getAllKeys();

            let pairs = [];
            for (let i = 0; i < keys.length; i++) {
                const itemValue = await AsyncStorage.getItem(keys[i]);
                JSON.stringify(itemValue);
                pairs.push([keys[i], itemValue]);
            };

            const jsonData = JSON.stringify({
                title,
                desc,
                done: false
            });
            const todoRegister = [`todo_${keys.length + 1}`, jsonData];

            pairs.push(todoRegister);


            await AsyncStorage.multiSet([...pairs])
                .then(navigateToTodo);
        } catch (error) {
            Alert.alert('Ops!', 'Ocorreu um erro. Tente novamente.');
        };
    };

    function navigateToTodo() {
        navigate.dispatch(state => {
            const routes = state.routes.filter(route => route.name !== 'Todo');

            return CommonActions.reset({
                ...state,
                routes,
                index: routes.length - 1,
            });
        });
        navigate.navigate('Todo');
    };

    function handleValidateTitle(text) {
        setTitle(text);
        if (text.length >= 4) {
            setAbleToSubmit(true);
        } else {
            setAbleToSubmit(false);
        }
    };

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.addContainer}>
            <Text style={styles.titleText}>Adicionar afazer:</Text>
            <View style={styles.formContainer}>
                <View style={styles.textInputView}>
                    <TextInput value={title} onChangeText={handleValidateTitle} autoCapitalize="sentences" maxLength={25} style={[styles.textInputs, { height: 80, width: '100%' }]} placeholder="Título" />
                    <Text style={styles.titleLength}>{title.length}/25</Text>
                </View>
                <TextInput value={desc} onChangeText={text => setDesc(text)} editable underlineColorAndroid='transparent' numberOfLines={20} textAlignVertical='top' multiline style={styles.textInputs} placeholder="Descrição" />
                <TouchableOpacity disabled={!ableToSubmit} onPress={setNewTodoItem} style={[styles.submitButton, !ableToSubmit && styles.submitDisableButton]}>
                    <Text style={styles.textSubmitButton}>Adiconar Afazer</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

export default AddTodo;