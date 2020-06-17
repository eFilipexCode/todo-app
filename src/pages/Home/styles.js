import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        padding: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainText: {
        fontSize: 48,
        marginVertical: 10,
        color: '#151515',
        textAlign: 'center',
        fontFamily: 'FrancoisOne_400Regular',
    },
    descriptionText: {
        fontSize: 16,
        color: '#555',
        textAlign: 'center',
        fontFamily: 'Roboto_500Medium',
        flexDirection: 'row'
    },
    enterButton: {
        width: '70%',
        height: 60,
        borderRadius: 10,
        backgroundColor: '#e1b12c',
        marginVertical: 30,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row'
    },
    textButton: {
        color: '#fff',
        fontFamily: 'Roboto_500Medium',
        
    }
});

export default styles;