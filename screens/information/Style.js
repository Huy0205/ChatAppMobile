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
        marginRight: 8,
    },
    btnSearchText: {
        ...TEXT,
        color: '#EBE2E2',
    },
    iconSetting: {
        width: 25,
        height: 25,
    },
    container: {
        flex: 1,
        backgroundColor: '#D9D9D9'
    },
    profile: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'white',
        marginBottom: 10,
    },
    personalPage: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 50,
        marginRight: 10,
        backgroundColor: 'black',
    },
    nameText: {
        fontSize: 13,
        fontWeight: '400',
        marginBottom: 5,
    },
    viewText: {
        fontSize: 11,
        color: '#645C5C',
    },
    icon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
        marginRight: 12,
    },
    itemsWrapper: { 
        backgroundColor: 'white', 
        marginBottom: 10 
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 15,
        paddingVertical: 8,
    },
    itemName: {
        ...TEXT,
        fontWeight: '400',
    },
    itemNote:{
        ...TEXT,
        color: "#645C5C",
        marginTop: 5,
    }
});

export default styles;
