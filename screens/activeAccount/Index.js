import { Alert, Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import styles from './Styles';
import { useNavigation } from '@react-navigation/native';

const ActiveAccount = () => {
    const navigation = useNavigation();
    const [time, setTime] = useState(30);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Kích hoạt tài khoản',
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

    useEffect(() => {
        const interval = setInterval(() => {
            setTime((prev) => prev - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [time]);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.require}>
                <Text style={styles.requireContent}>Vui lòng không chia sẻ mã xác thực để tránh mất tài khoản</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.alert}>Đang gọi đến số (+84) XXX XXX XXX</Text>
                <Text style={styles.requestListening}>vui lòng bật máy để nghe mã</Text>
            </View>
            <View style={styles.inputOTP}>
                <TextInput keyboardType="numeric" maxLength={1} style={styles.txt} />
                <TextInput keyboardType="numeric" maxLength={1} style={styles.txt} />
                <TextInput keyboardType="numeric" maxLength={1} style={styles.txt} />
                <TextInput keyboardType="numeric" maxLength={1} style={styles.txt} />
            </View>
            <View style={styles.sendTo}>
                <TouchableOpacity>
                    <Text style={styles.btnSendToText}>Gửi lại mã</Text>
                </TouchableOpacity>
                <Text style={styles.time}>00:{time > 9 ? time : '0' + time}</Text>
            </View>
            <View style={styles.action}>
                <TouchableOpacity style={styles.btnContinue}>
                    <Text style={styles.btnContinueText}>Tiếp tục</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default ActiveAccount;
