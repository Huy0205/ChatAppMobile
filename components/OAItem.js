import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';

const OAItem = () => {
    return (
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: 10}}>
            <Image
                source={require('../assets/icon.png')}
                style={{ width: 60, height: 60, borderRadius: 30, marginRight: 15 }}
            />
            <Text style={{ fontSize: 18 }}>Official Account</Text>
        </TouchableOpacity>
    );
};

export default OAItem;
