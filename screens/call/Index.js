import { View, Text, Pressable, Image, StatusBar } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const Index = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);
    return (
        <View style={{ flex: 1, backgroundColor: '#1FAEEB' }}>
            <StatusBar style="light" />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 15 }}>
                <Pressable>
                    <View
                        style={{
                            width: 30,
                            height: 30,
                            borderRadius: 15,
                            backgroundColor: '#A19D9D',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Image source={require('../../assets/img/back.png')} style={{ width: 10, height: 18 }} />
                    </View>
                </Pressable>
                <Text style={{ fontSize: 18, fontWeight: '400', color: '#fff' }}>Zalo</Text>
                <Pressable>
                    <View
                        style={{
                            width: 30,
                            height: 30,
                            borderRadius: 15,
                            backgroundColor: '#A19D9D',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Image source={require('../../assets/img/camera.png')} style={{ width: 15, height: 15, resizeMode: 'contain' }} />
                    </View>
                </Pressable>
            </View>
            <View style={{ flex: 1, alignItems: 'center', paddingTop: 50 }}>
                <View
                    style={{
                        backgroundColor: '#157EF9',
                        width: 200,
                        height: 200,
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                    }}
                >
                    <View
                        style={{
                            backgroundColor: '#1FAEEB',
                            padding: 30,
                            borderRadius: 100,
                            position: 'absolute',
                            top: 5,
                            width: 190,
                            height: 190,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Image
                            source={require('../../assets/img/avatar.png')}
                            style={{ width: 120, height: 120, borderRadius: 60 }}
                        />
                    </View>
                    <Text style={{ fontSize: 20, fontWeight: '600', color: '#fff' }}>Bảo Ngọc</Text>
                </View>
                <Text style={{ fontSize: 18, color: '#fff', fontWeight: '400', marginTop: 5 }}>Đang đổ chuông</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingBottom: 50 }}>
                <Pressable>
                    <View
                        style={{
                            width: 60,
                            height: 60,
                            backgroundColor: '#A19D9D',
                            borderRadius: 30,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Image
                            source={require('../../assets/img/speaker.png')}
                            style={{ width: 30, height: 30, resizeMode: 'contain' }}
                        />
                    </View>
                </Pressable>
                <Pressable>
                    <View
                        style={{
                            width: 60,
                            height: 60,
                            backgroundColor: 'red',
                            borderRadius: 30,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Image
                            source={require('../../assets/img/phone.png')}
                            style={{ width: 30, height: 30, resizeMode: 'contain' }}
                        />
                    </View>
                </Pressable>
                <Pressable>
                    <View
                        style={{
                            width: 60,
                            height: 60,
                            backgroundColor: '#A19D9D',
                            borderRadius: 30,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Image
                            source={require('../../assets/img/mic.png')}
                            style={{ width: 30, height: 30, resizeMode: 'contain' }}
                        />
                    </View>
                </Pressable>
            </View>
        </View>
    );
};

export default Index;
