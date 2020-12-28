import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Text, Dimensions } from 'react-native';
import TextStyles from '../Styles/TextStyles';
const { width, height } = Dimensions.get('window');
import { useNavigation } from '@react-navigation/native';
const SplashScreen = () => {
    //State for ActivityIndicator animation
    const [animating, setAnimating] = useState(true);
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
            setAnimating(false);
            navigation.navigate('ForgotPasswordScreen');
        }, 2000);
    }, []);

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: '#FFF' }}>
            <Image source={require('../Assets/Images/email.png')}
                style={{ width: 127, height: 114 }}></Image>
            <Text style={[TextStyles.TitleText, { marginTop: height * .03 }]}>Forgot Password ?</Text>
            <Text style={[TextStyles.RR14, { marginTop: height * .01 }]}>Check your mail send to change your password</Text>
        </View>
    );
};

export default SplashScreen;