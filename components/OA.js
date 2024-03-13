import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import OAItem from './OAItem';

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const OA = () => {
    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity
                style={{
                    flexDirection: 'row',
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                    backgroundColor: '#fff',
                    alignItems: 'center',
                    marginBottom: 8,
                }}
            >
                <View
                    style={{
                        backgroundColor: 'violet',
                        width: 40,
                        height: 40,
                        borderRadius: 20,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: 10,
                    }}
                >
                    <Image source={require('../assets/img/wifi.png')} />
                </View>
                <Text style={{ fontSize: 12, fontWeight: '400' }}>Tìm thêm Official Account</Text>
            </TouchableOpacity>
            <View style={{ backgroundColor: '#fff', flex: 1, padding: 10 }}>
                <Text style={{fontSize: 12, marginBottom: 40}}>Official đang quan tâm</Text>
                <View style={{flex:1}}>
                    <FlatList
                        data={data}
                        keyExtractor={(item) => item.toString()}
                        renderItem={({ item }) => <OAItem />}
                    />
                </View>
            </View>
        </View>
    );
};

export default OA;
