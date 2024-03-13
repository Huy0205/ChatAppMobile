import { View, Text, Image } from 'react-native';
import React from 'react';

const FriendItem = () => {
    return (
        <View style={{ padding: 10 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                    source={require('../assets/icon.png')}
                    style={{ width: 60, height: 60, borderRadius: 30, marginRight: 10}}
                />
                <Text style={{ fontSize: 18 }}>Ái Vân</Text>
            </View>
            <View>
                <Image />
                <Image />
            </View>
        </View>
    );
};

export default FriendItem;
