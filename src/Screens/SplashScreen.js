import React, { useState, useEffect } from 'react';
import {
    ActivityIndicator,
    View,
    StyleSheet,
    Image, Text
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

const SplashScreen = ({ navigation }) => {
    //State for ActivityIndicator animation
    const [animating, setAnimating] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setAnimating(false);
            AsyncStorage.getItem('user_id').then((value) =>
                navigation.replace(
                    value === null ? 'RegistrationScreen' : 'LoginScreen'
                ),
            );
        }, 2000);
    }, []);

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ color: '#0182C3', fontSize: 26, fontFamily: 'OpenSans-SemiBold' }}>
                LOGO
      </Text>
        </View>
    );
};

export default SplashScreen;