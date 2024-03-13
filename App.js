import React from 'react';

import Home from './screens/home/Index';
import CreateAccount from './screens/createAccount/Index';
import ActiveAccount from './screens/activeAccount/Index';
import SignUp from './screens/signUp/Index';

import SignIn from './screens/signIn/Index';

import Information from './screens/information/Index';
import Search from './screens/search/Index';
import PhoneBook from './screens/phoneBook/Index';
import Message from './screens/message/Index';
import Call from './screens/call/Index';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="CreateAccount" component={CreateAccount} />
                <Stack.Screen name="ActiveAccount" component={ActiveAccount} />
                <Stack.Screen name="SignUp" component={SignUp} />

                <Stack.Screen name="SignIn" component={SignIn} />

                {/* 
                <Stack.Screen
                    name="ActiveAccount"
                    component={ActiveAccount}
                    options={{
                        title: 'Kích hoạt tài khoản',
                        headerStyle: {
                            backgroundColor: '#1FAEEB',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            fontSize: 18,
                        },
                    }}
                />
                <Stack.Screen
                    name="SignUp"
                    component={SignUp}
                    options={{
                        title: 'Tạo tài khoản',
                        headerStyle: {
                            backgroundColor: '#1FAEEB',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            fontSize: 18,
                        },
                    }}
                />
                <Stack.Screen
                    name="SignIn"
                    component={SignIn}
                    options={{
                        title: 'Đăng nhập',
                        headerStyle: {
                            backgroundColor: '#1FAEEB',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            fontSize: 18,
                        },
                    }}
                /> */}
                {/* <Stack.Screen name="Information" component={PhoneBook} />
                <Stack.Screen name="Search" component={Search} /> */}
                {/* <Stack.Screen name="Message" component={Message} /> */}
                {/* <Stack.Screen name="Call" component={Call} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
