import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useLayoutEffect } from 'react';
import styles from './Style';
import MessageItem from '../../components/MessageItem';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native';

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Index = () => {
    const navigation = useNavigation();
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
                    <Text style={styles.btnSearchText}>Tìm kiếm</Text>
                </TouchableOpacity>
            ),
            headerRight: () => (
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={{ marginRight: 15 }}>
                        <Image source={require('../../assets/img/more.png')} style={styles.iconHeaderRight} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../../assets/img/plus.png')} style={styles.iconHeaderRight} />
                    </TouchableOpacity>
                </View>
            ),
        });
    }, []);
    return (
        <View style={{flex: 1}}>
            <FlatList data={data} renderItem={() => <MessageItem />} />
        </View>
    );
};

export default Index;
