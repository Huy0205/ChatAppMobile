import { StyleSheet } from 'react-native';

const TEXT = {
    fontSize: 12,
};

const styles = StyleSheet.create({
    iconBack: {
        width: 10,
        height: 18,
        marginRight: 20,
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    lblName: {
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    lblNameText: {
        fontSize: 18,
    },
    txtName: {
        borderBottomWidth: 1,
        borderBottomColor: '#61686A',
        paddingHorizontal: 15,
        paddingVertical: 8,
        ...TEXT,
    },
    note: {
        flex: 1,
        padding: 15,
    },
    lblNote: {
        ...TEXT,
    },
    noteItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    bullet: {
        marginRight: 5,
        backgroundColor: 'black',
        borderRadius: 50,
        width: 7,
        height: 7,
    },
    noteItemContent: {
        flexDirection: 'row',
    },
    noteItemContentText: {
        ...TEXT,
    },
    nameRules: {
        color: '#1FAEEB',
        ...TEXT,
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
