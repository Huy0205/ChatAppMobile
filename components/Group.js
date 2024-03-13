import { View, Text, TouchableOpacity, Image, Pressable } from 'react-native';
import React from 'react';

const Group = () => {
    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: '#fff',
                    padding: 18,
                    marginBottom: 8,
                }}
            >
                <Image
                    source={require('../assets/img/addFriend.png')}
                    style={{ width: 20, height: 20, resizeMode: 'contain', marginRight: 8 }}
                />
                <Text style={{ fontSize: 12, color: '#5DA2F2' }}>Tạo nhóm mới</Text>
            </TouchableOpacity>
            <View style={{ padding: 10, backgroundColor: '#fff', marginBottom: 8 }}>
                <View>
                    <Text style={{ fontSize: 10 }}>Tạo nhóm mới</Text>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingHorizontal: 20,
                        paddingVertical: 15,
                    }}
                >
                    <View style={{ alignItems: 'center' }}>
                        <View style={{ backgroundColor: '#D9D9D9', padding: 7, marginBottom: 2 }}>
                            <Image source={require('../assets/img/celendar.png')} />
                        </View>
                        <Text style={{ fontSize: 8, fontWeight: '400' }}>Lịch</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <View style={{ backgroundColor: '#D9D9D9', padding: 7, marginBottom: 2 }}>
                            <Image source={require('../assets/img/redClock.png')} />
                        </View>
                        <Text style={{ fontSize: 8, fontWeight: '400' }}>Nhắc hẹn</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <View style={{ backgroundColor: '#D9D9D9', padding: 7, marginBottom: 2 }}>
                            <Image source={require('../assets/img/offline.png')} />
                        </View>
                        <Text style={{ fontSize: 8, fontWeight: '400' }}>Offline</Text>
                    </View>
                </View>
            </View>
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <View
                    style={{
                        flexDirection: 'row',
                        padding: 15,
                        justifyContent: 'space-between',
                    }}
                >
                    <Text style={{fontSize: 10, fontWeight: '500'}}>Nhóm đang than gia</Text>
                    <Pressable>
                        <Text style={{fontSize: 9, fontWeight: 40}}>Sắp xếp</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
};

export default Group;
