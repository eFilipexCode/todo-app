import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    todoContainer: {
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 20,
        minHeight: 200,
        marginVertical: 20,
        padding: 30,
        alignSelf: 'center'
    },
    titleContainer: {
        flex: 1
    },
    todoTitle: {
        fontSize: 32,
        color: '#151515',
        fontFamily: 'FrancoisOne_400Regular',
        marginVertical: 10
    },
    todoDescription: {
        fontFamily: 'Roboto_400Regular',
        marginVertical: 5
    },  
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    buttons: {
        padding: 10,
        borderRadius: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonsText: {
        fontFamily: 'Roboto_500Medium',
        textAlign: 'center',
        marginHorizontal: 10
    },
    doneButton: {
        backgroundColor: '#e1b12c',
        flexDirection: 'row'
    },
    doneTextButton: {
        color: '#fff',
    }
});

export default styles;