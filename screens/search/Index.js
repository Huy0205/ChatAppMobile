import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from './Style';

const Index = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions(
            {
                title: null,
                headerStyle: {
                    backgroundColor: '#1FAEEB',
                },
                headerLeft: () => (
                    <View style={styles.headerLeft}>
                        <TouchableOpacity onPress={navigation.goBack()}>
                            <Image source={require('../../assets/img/back.png')} style={styles.iconBack} />
                        </TouchableOpacity>
                        <TextInput placeholder="Tìm kiếm" style={styles.txtSearch} autoFocus={true}/>
                    </View>
                ),
                headerRight: () => (
                    <TouchableOpacity>
                        <Image source={require('../../assets/img/more.png')} style={styles.iconMore} />
                    </TouchableOpacity>
                ),
            },
            [],
        );
    });
    return (
        <View>
            
        </View>
    );
};

export default Index;
