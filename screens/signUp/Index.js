import { Image, Pressable, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useLayoutEffect } from 'react';
import styles, { TEXT } from './Styles';
import { useNavigation } from '@react-navigation/native';

const SignUp = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Tạo tài khoản',
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
            <View style={styles.lblName}>
                <Text style={styles.lblNameText}>Tên Zalo</Text>
            </View>
            <TextInput
                placeholder="Gồm 2-40 ký tự"
                placeholderTextColor={'#645C5C'}
                maxLength={40}
                style={styles.txtName}
            />
            <View style={styles.note}>
                <Text style={styles.lblNote}>Lưu ý khi đặt tên</Text>
                <View style={styles.noteItem}>
                    <View style={styles.bullet}></View>
                    <View style={styles.noteItemContent}>
                        <Text style={styles.noteItemContentText}>Không vi phạm </Text>
                        <Pressable>
                            <Text style={styles.nameRules}>Quy định đặt tên trên Zalo</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={styles.noteItem}>
                    <View style={styles.bullet}></View>
                    <Text style={styles.noteItemContentText}>Nên sử dụng tên thật giúp bạn bè dễ nhận ra bạn</Text>
                </View>
            </View>
            <View style={styles.action}>
                <View style={styles.rules}>
                    <Text style={TEXT}>Tiếp tục nghĩa là bạn đồng ý với các</Text>
                    <Pressable>
                        <Text style={[TEXT, { color: '#1FAEEB' }]}>điều khoản sử dụng Zalo</Text>
                    </Pressable>
                </View>
                <View>
                    <TouchableOpacity style={styles.btnNext}>
                        <Image source={require('../../assets/img/next.png')} style={styles.iconNext} />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default SignUp;
