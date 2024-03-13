import { View, Text, Image, TouchableOpacity, Pressable, StatusBar } from 'react-native';
import React, { useLayoutEffect } from 'react';
import styles from './Style';
import { useNavigation } from '@react-navigation/native';

const index = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions(
            {
                title: null,
                headerStyle: {
                    backgroundColor: '#1FAEEB',
                },
                headerLeft: () => (
                    <TouchableOpacity style={styles.btnSearch}>
                        <Image source={require('../../assets/img/search.png')} style={styles.iconSearch} />
                        <Text style={styles.btnSearchText}>Tìm kiếm</Text>
                    </TouchableOpacity>
                ),
                headerRight: () => (
                    <TouchableOpacity>
                        <Image source={require('../../assets/img/setting.png')} style={styles.iconSetting} />
                    </TouchableOpacity>
                ),
            },
            [],
        );
    });

    return (
        <View style={styles.container}>
            <StatusBar style="light"/>
            <TouchableOpacity style={styles.profile}>
                <View style={styles.personalPage}>
                    <Image source={require('../../assets/img/avatar.png')} style={styles.avatar} />
                    <View>
                        <Text style={styles.nameText}>Hiểu Đôngg</Text>
                        <Text style={styles.viewText}>Xem trang cá nhân</Text>
                    </View>
                </View>
                <Pressable>
                    <Image source={require('../../assets/img/accountTransfer.png')} style={styles.icon} />
                </Pressable>
            </TouchableOpacity>
            <View style={styles.itemsWrapper}>
                <TouchableOpacity style={styles.item}>
                    <Image source={require('../../assets/img/wallet.png')} style={styles.icon} />
                    <View>
                        <Text style={styles.itemName}>Ví QR</Text>
                        <Text style={styles.itemNote}>Lưu trữ và xuất trình các mã QR quan trọng</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item}>
                    <Image source={require('../../assets/img/cloud.png')} style={[styles.icon, {width: 25, height: 25}]} />
                    <View>
                        <Text style={styles.itemName}>Cloud của tôi</Text>
                        <Text style={styles.itemNote}>Lưu trữ các tin nhắn quan trọng</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item}>
                    <Image source={require('../../assets/img/clock.png')} style={styles.icon} />
                    <View>
                        <Text style={styles.itemName}>Quản lý dung lượng và bộ nhớ</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.itemsWrapper}>
                <TouchableOpacity style={styles.item}>
                    <Image source={require('../../assets/img/privacy.png')} style={styles.icon} />
                    <View>
                        <Text style={styles.itemName}>Tài khoản và bảo mật</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item}>
                    <Image source={require('../../assets/img/lock.png')} style={styles.icon} />
                    <View>
                        <Text style={styles.itemName}>Quyền riêng tư</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default index;
