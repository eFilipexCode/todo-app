import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    addContainer: {
        flex: 1,
        alignItems: 'center',
        paddingTop: Constants.statusBarHeight + 30,
        backgroundColor: '#eee',
    },
    titleText: {
        fontSize: 30,
        fontFamily: 'FrancoisOne_400Regular',
        color: '#e1b12c'
    },
    formContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center'
    },
    textInputView: {
        width: '90%',
        justifyContent: 'center'
    },
    textInputs: {
        width: '90%',
        paddingHorizontal: 32, 
        paddingVertical: 30,
        backgroundColor: '#fff',
        marginVertical: 20,
        borderRadius: 20,
        justifyContent: 'flex-start'
    },
    submitButton: {
        width: '90%',
        height: 80,
        paddingVertical: 30,
        paddingHorizontal: 32,
        backgroundColor: '#e1b12c',
        borderRadius: 20,
        alignItems: 'center',
    },
    submitDisableButton :{
        backgroundColor: '#ccc',
    },
    textSubmitButton: {
        color: '#fff',
        fontFamily: 'Roboto_500Medium'
    },
    titleLength: {
        position: 'absolute',
        right: 20,
        fontFamily: 'Roboto_400Regular'
    }
});

export default styles;