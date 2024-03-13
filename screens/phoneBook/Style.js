import { StyleSheet } from 'react-native';

const TEXT = {
    fontSize: 12,
};

const styles = StyleSheet.create({
    btnSearch: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconSearch: {
        width: 20,
        height: 22,
        resizeMode: 'contain',
        marginRight: 8,
    },
    btnSearchText: {
        ...TEXT,
        color: '#EBE2E2',
    },
    iconAddFriend: {
        width: 23,
        height: 23,
        resizeMode: 'contain',
    },
});

export default styles;
