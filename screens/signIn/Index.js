import { Image, Pressable, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useLayoutEffect } from 'react';
import styles from './Styles';
import { useNavigation } from '@react-navigation/native';

const SignIn = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Đăng nhập',
            headerStyle: {
                backgroundColor: '#1FAEEB',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 18,
            },
            headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../../assets/img/back.png')} style={styles.iconBack} />
                </TouchableOpacity>
            ),
        });
    }, []);
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.require}>
                <Text style={styles.requireContent}>Vui lòng nhập số điện thoại và mật khẩu đăng nhập</Text>
            </View>
            <TextInput placeholder="Số điện thoại" style={styles.txtPhoneNumber} />
            <View style={styles.inputPassword}>
                <TextInput placeholder="Mật khẩu" secureTextEntry={true} style={styles.txtPassword} />

                <TouchableOpacity>
                    <Text style={styles.btnShowPasswordText}>HIỆN</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.resetPassword}>
                <TouchableOpacity>
                    <Text style={styles.btnResetPasswordText}>Lấy lại mật khẩu</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.action}>
                <TouchableOpacity style={styles.btnSignIn}>
                    <Text style={styles.btnSignInText}>Đăng nhập</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.questions}>
                <Pressable>
                    <Text style={styles.btnQuestionsText}>Các câu hỏi thường gặp</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

export default SignIn;
