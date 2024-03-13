import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';

const MessageItem = () => {
    return (
        <TouchableOpacity style={{ flexDirection: 'row', padding: 15, alignItems: 'center' }}>
            <Image
                source={require('../assets/icon.png')}
                style={{ width: 60, height: 60, borderRadius: 30, marginRight: 15 }}
            />
            <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 16, fontWeight: '500', marginBottom: 5 }}>Nguyễn Văn A</Text>
                <Text style={{ fontSize: 14, fontWeight: '500' }}>Chào bạn</Text>
            </View>
            <View style={{ alignItems: 'flex-end'}}>
                <Text style={{ fontSize: 12, fontWeight: '500', marginBottom: 8 }}>10 giờ</Text>
                <View
                    style={{
                        width: 24,
                        height: 20,
                        backgroundColor: 'red',
                        borderRadius: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Text style={{ fontSize: 14, color: '#fff', fontWeight: '500' }}>N</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default MessageItem;
