import { View, Text, Pressable, TouchableOpacity, Image } from 'react-native';
import React, { useLayoutEffect } from 'react';
import Friend from '../../components/Friend';
import Group from '../../components/Group';
import OA from '../../components/OA';
import styles from './Style';
import { useNavigation } from '@react-navigation/native';

const Index = () => {
    const navigation = useNavigation();
    const [isShow, setIsShow] = React.useState('Friend');
    useLayoutEffect(() => {
        navigation.setOptions({
            title: null,
            headerStyle: {
                backgroundColor: '#1FAEEB',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: '500',
                fontSize: 12,
            },
            headerLeft: () => (
                <TouchableOpacity style={styles.btnSearch} onPress={() => navigation.navigate('Search')}>
                    <Image source={require('../../assets/img/search.png')} style={styles.iconSearch} />
                    <Text style={styles.btnSearchText}>Tìm kiếm bạn bè, tin nhắn</Text>
                </TouchableOpacity>
            ),
            headerRight: () => (
                <TouchableOpacity>
                    <Image source={require('../../assets/img/addFriend.png')} style={styles.iconAddFriend} />
                </TouchableOpacity>
            ),
        });
    }, []);
    return (
        <View style={{ flex: 1, backgroundColor: '#D9D9D9' }}>
            <View
                style={{
                    flexDirection: 'row',
                    backgroundColor: '#D9D9D9',
                    justifyContent: 'space-around',
                    paddingVertical: 20,
                }}
            >
                <Pressable onPress={() => setIsShow('Friend')}>
                    <Text style={{ fontSize: 10, fontWeight: '600', color: isShow === 'Friend' ? 'black' : '#645C5C' }}>
                        BẠN BÈ
                    </Text>
                </Pressable>
                <Pressable onPress={() => setIsShow('Group')}>
                    <Text style={{ fontSize: 10, fontWeight: '600', color: isShow === 'Group' ? 'black' : '#645C5C' }}>
                        NHÓM
                    </Text>
                </Pressable>
                <Pressable onPress={() => setIsShow('OA')}>
                    <Text style={{ fontSize: 10, fontWeight: '600', color: isShow === 'OA' ? 'black' : '#645C5C' }}>
                        OA
                    </Text>
                </Pressable>
            </View>
            {isShow === 'Friend' ? <Friend /> : isShow === 'Group' ? <Group /> : <OA />}
        </View>
    );
};

export default Index;
