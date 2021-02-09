import React, { Component } from 'react';
import { ImageBackground, StatusBar, View, Dimensions, Text } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
const { width, height } = Dimensions.get('window')
export default class Splash extends Component {
    constructor() {
        super();
        this.state = {
            isVisible: true, user: ''
        }
    }
    Hide_Splash_Screen = () => {
        this.setState({
            isVisible: false
        });
    }
    async componentDidMount() {
        var that = this;
        const data = await AsyncStorage.getItem('loginDetails');
        console.log(data)
        AsyncStorage.getItem('user').then((value) => this.setState({ 'user': value }))
        if (data == null) {
            this.props.navigation.push('RegistrationScreen')
        }
        else {
            this.props.navigation.push('HomeScreen');
        }
        setTimeout(function () {
            that.Hide_Splash_Screen();
        }, 3000);
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text style={{ color: '#0182C3', fontSize: 26, fontFamily: 'OpenSans-SemiBold' }}>
                    LOGO
      </Text>
            </View>
        );
    }
};