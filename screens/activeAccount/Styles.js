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
    content: {
        flex: 3,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    alert: {
        fontSize: 15,
    },
    requestListening: {
        ...TEXT,
        color: '#645C5C',
    },
    inputOTP: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
    },
    txt: {
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        width: 35,
        textAlign: 'center',
        marginRight: 10,
        paddingVertical: 5,
        ...TEXT,
    },
    sendTo: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnSendToText: {
        ...TEXT,
        marginRight: 10,
    },
    time: {
        ...TEXT,
        color: '#1FAEEB',
    },
    action: {
        flex: 7,
        alignItems: 'center',
    },
    btnContinue: {
        backgroundColor: '#1FAEEB',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        paddingVertical: 12,
        paddingHorizontal: 70,
    },
    btnContinueText: {
        color: 'white',
        ...TEXT,
    },
});

export default styles;