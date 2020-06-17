import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
    },
    sectionTitle: {
        textAlign: 'center',
        marginVertical: 20,
        fontFamily: 'Roboto_500Medium',
        alignSelf: 'center',
        fontSize: 16,
        borderBottomColor: '#e1b12c',
        borderBottomWidth: 3,
    },
    noTodos: {
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 16,
        fontFamily: 'Roboto_500Medium',
        marginVertical: 25,
    }
});

export default styles;