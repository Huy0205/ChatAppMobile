import { StyleSheet } from 'react-native';

const TEXT = {
    fontSize: 12,
};

const styles = StyleSheet.create({
    iconBack: {
        width: 10,
        height: 18,
        marginRight: 30,
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    require: {
        padding: 5,
        backgroundColor: '#D9D9D9',
    },
    requireContent: {
        ...TEXT,
    },
    input: {
        padding: 15,
        flexDirection: 'row',
    },
    selectCountry: {
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    selectCountryText: {
        ...TEXT,
    },
    iconSelect: {
        width: 13,
        height: 10,
        resizeMode: 'contain',
        marginLeft: 5,
    },
    txtPhone: {
        flex: 5,
        marginLeft: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#1FAEEB',
        ...TEXT,
    },
    emty: {
        flex: 1,
    },
    action: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 15,
    },
    rules: {
        flex: 1,
        justifyContent: 'space-between',
    },
    btnNext: {
        backgroundColor: '#1FAEEB',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        padding: 10,
    },
    iconNext: {
        width: 20,
        height: 20,
    },
});

export default styles;
export { TEXT };
