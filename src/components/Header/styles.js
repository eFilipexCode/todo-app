import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    headerContainer: {
        paddingTop: Constants.statusBarHeight + 5,
        height: 90,
        paddingHorizontal: 20,
        backgroundColor: '#e1b12c',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%'
    },
    textHeader: {
        fontSize: 16,
        fontFamily: 'Roboto_400Regular',
        color: '#fff'
    }
});

export default styles;