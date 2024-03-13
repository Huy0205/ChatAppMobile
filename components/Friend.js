import { View, Text, Image, Pressable, FlatList } from 'react-native';
import React from 'react';
import FriendItem from './FriendItem';
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const Friend = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ backgroundColor: '#fff', padding: 8, marginBottom: 8 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        source={require('../assets/img/friendRequest.png')}
                        style={{ width: 50, height: 50, resizeMode: 'contain' }}
                    />
                    <Text style={{ fontSize: 10, fontWeight: '400' }}>Lời mời kết bạn</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        source={require('../assets/img/phoneBook.png')}
                        style={{ width: 53, height: 53, resizeMode: 'contain' }}
                    />
                    <View>
                        <Text style={{ fontSize: 10, fontWeight: '400' }}>Danh bạ máy</Text>
                        <Text style={{ fontSize: 10, fontWeight: '400', color: '#958B8B' }}>
                            Các liên hệ có dùng Zalo
                        </Text>
                    </View>
                </View>
            </View>
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <View
                    style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 30, paddingVertical: 15 }}
                >
                    <Pressable style={{ backgroundColor: '#D9D9D9', borderRadius: 25, padding: 6, marginRight: 20 }}>
                        <Text style={{ fontSize: 10, fontWeight: '400' }}>Tất cả (4)</Text>
                    </Pressable>
                    <Pressable style={{ backgroundColor: '#D9D9D9', borderRadius: 25, padding: 6 }}>
                        <Text style={{ fontSize: 10, fontWeight: '400' }}>Mới truy cập (2)</Text>
                    </Pressable>
                </View>
                <View style={{ flex: 1 }}>
                    <FlatList
                        data={data}
                        keyExtractor={(item) => item.toString()}
                        renderItem={({ item }) => <FriendItem />}
                    />
                </View>
            </View>
        </View>
    );
};

export default Friend;
