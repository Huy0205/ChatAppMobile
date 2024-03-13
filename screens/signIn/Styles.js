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
    require: {
        padding: 5,
        backgroundColor: '#D9D9D9',
    },
    requireContent: {
        ...TEXT,
    },
    txtPhoneNumber: {
        borderBottomWidth: 1,
        borderBottomColor: '#1FAEEB',
        paddingVertical: 20,
        paddingHorizontal: 15,
        ...TEXT,
    },
    inputPassword: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        alignItems: 'center',
        paddingRight: 15,
    },
    txtPassword: {
        flex: 1,
        padding: 15,
        ...TEXT,
    },
    btnShowPasswordText: {
        ...TEXT,
    },
    resetPassword: {
        padding: 15,
    },
    btnResetPasswordText: {
        color: '#1FAEEB',
        ...TEXT,
    },
    action: {
        flex: 1,
        padding: 15,
        alignItems: 'center',
    },
    btnSignIn: {
        backgroundColor: '#1FAEEB',
        paddingVertical: 12,
        paddingHorizontal: 50,
        borderRadius: 30,
    },
    btnSignInText: {
        color: 'white',
        ...TEXT,
    },
    questions: {
        marginBottom: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnQuestionsText: {
        ...TEXT,
    },
});

export default styles;
