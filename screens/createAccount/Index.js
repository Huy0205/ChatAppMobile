import { Image, Pressable, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import styles, { TEXT } from './Styles';
import { useNavigation } from '@react-navigation/native';
import RNPhoneCodeSelect from 'react-native-phone-code-select';

const CreateAccount = () => {
    const navigation = useNavigation();
    const [visible, setVisible] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState({});

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

    const handleCreateAccount = () => {
        navigation.navigate('ActiveAccount');
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.require}>
                <Text style={styles.requireContent}>Nhập số điện thoại của bạn để tạo tài khoản mới</Text>
            </View>
            <View style={styles.input}>
                <View>
                    <Pressable style={styles.selectCountry} onPress={() => setVisible(true)}>
                        <Text style={styles.selectCountryText}>{selectedCountry.dial_code || '+84'}</Text>
                        <Image source={require('../../assets/img/dropdown.png')} style={styles.iconSelect}/>
                    </Pressable>
                    <RNPhoneCodeSelect
                        visible={visible}
                        onDismiss={() => setVisible(false)}
                        onCountryPress={(country) => {
                            setSelectedCountry(country);
                        }}
                        primaryColor="#f04a4a"
                        buttonText="Đóng"
                    />
                </View>
                <TextInput keyboardType='phone-pad' placeholder="Số điện thoại" style={styles.txtPhone} />
            </View>
            <View style={styles.emty}></View>
            <View style={styles.action}>
                <View style={styles.rules}>
                    <Text style={TEXT}>Tiếp tục nghĩa là bạn đồng ý với các</Text>
                    <Pressable>
                        <Text style={[TEXT, { color: '#1FAEEB' }]}>điều khoản sử dụng Zalo</Text>
                    </Pressable>
                </View>
                <View>
                    <TouchableOpacity style={styles.btnNext} onPress={handleCreateAccount}>
                        <Image source={require('../../assets/img/next.png')} style={styles.iconNext} />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default CreateAccount;
