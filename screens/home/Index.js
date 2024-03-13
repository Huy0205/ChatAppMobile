import { Image, Pressable, SafeAreaView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import React, { useLayoutEffect, useState } from 'react';
import styles, { btn, btnText } from './Styles';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation();
    const [language, setLanguage] = useState('Vietnamese');
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.titleText}>Zalo</Text>
            </View>
            <View style={styles.banner}>
                <Image source={require('../../assets/img/imgHome.png')} style={styles.imgBanner} />
            </View>
            <View style={styles.action}>
                <TouchableOpacity
                    style={styles.btnLogin}
                    onPress={() => {
                        navigation.navigate('SignIn');
                    }}
                >
                    <Text style={styles.btnLoginText}>Đăng nhập</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btnRegister}
                    onPress={() => {
                        navigation.navigate('CreateAccount');
                    }}
                >
                    <Text style={styles.btnRegisterText}>Đăng ký</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.language}>
                <Pressable style={styles.btnVietnamese} onPress={() => setLanguage('Vietnamese')}>
                    <Text style={[btnText, { color: language === 'Vietnamese' ? 'black' : '#9A8888' }]}>
                        Tiếng Việt
                    </Text>
                </Pressable>
                <Pressable onPress={() => setLanguage('English')}>
                    <Text style={[btnText, { color: language === 'English' ? 'black' : '#9A8888' }]}>English</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

export default Home;
