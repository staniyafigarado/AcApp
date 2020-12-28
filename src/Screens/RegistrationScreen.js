import React, { useState } from 'react';
import { Text, View, Dimensions, TouchableOpacity, TextInput, Image, ScrollView, ToastAndroid } from 'react-native';
import TextStyles from '../Styles/TextStyles';
import Styles from '../Styles/Styles';
import Card from '../SharedComponents/CustomCard';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';
import WooCommerce from '../Utils/wooApi';
import axios from 'axios';
const { width, height } = Dimensions.get('window');
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            password: '',
            confirmPassword: '',
            hidePassword: true
        };
    }
    handleSubmit = () => {
        const { password, confirmPassword, username, email } = this.state;
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (password !== confirmPassword) {
            alert("Passwords don't match");
        } else if (username == '' || email == '') {
            alert("Fill all the fields");
        } else {
            this.submit();
        }
    }


    handleSubmit = () => {
        // WooCommerce.post('customers', {
        //     email: this.state.email,
        //     username: this.state.username,
        //     password: this.state.password
        // })
        //     .then(data => {
        //         console.log(data);
        //         // AsyncStorage.setItem('user', JSON.stringify(data.data.id));
        //         // this.props.navigation.navigate("Home");
        //     })
        //     .catch(error => {
        //         console.log(error);
        //         alert('User already exist')
        //     });
        const data = {
            email: "john.doe@example.com",
            first_name: "John",
            last_name: "Doe",
            username: "john.doe",
            billing: {
                first_name: "John",
                last_name: "Doe",
                company: "",
                address_1: "969 Market",
                address_2: "",
                city: "San Francisco",
                state: "CA",
                postcode: "94103",
                country: "US",
                email: "john.doe@example.com",
                phone: "(555) 555-5555"
            },
            shipping: {
                first_name: "John",
                last_name: "Doe",
                company: "",
                address_1: "969 Market",
                address_2: "",
                city: "San Francisco",
                state: "CA",
                postcode: "94103",
                country: "US"
            }
        };

        WooCommerce.post("customers", data)
            .then((response) => {
                console.log("sucess", JSON.stringify(response.message));
            })
            .catch((error) => {
                console.log("error:", error.response.data);
            });
    }
    setPasswordVisibility = () => {
        this.setState({ hidePassword: !this.state.hidePassword });
    }
    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={[Styles.Container]}>
                    <Text style={[TextStyles.TitleText, { marginTop: height * .1 }]}>Create an account</Text>
                    <Card style={Styles.CustomCard}>
                        <TextInput
                            placeholder={'User Name'}
                            onChangeText={username => this.setState({ username })}
                            style={Styles.TextInput}
                        ></TextInput>
                    </Card>
                    <Card style={[Styles.CustomCard, { marginTop: height * 0.03 }]}>
                        <TextInput
                            placeholder={'Email Address'}
                            onChangeText={email => this.setState({ email })}
                            style={Styles.TextInput}
                        ></TextInput>
                    </Card>
                    <Card style={Styles.PasswordField}>
                        <TextInput
                            placeholder={'Password'}
                            secureTextEntry={this.state.hidePassword}
                            style={[Styles.TextInput, { width: '85%' }]}
                            onChangeText={password => this.setState({ password })}
                        ></TextInput>
                        <View style={{ width: '15%', alignItems: 'center', justifyContent: 'center' }}>
                            <TouchableOpacity onPress={this.setPasswordVisibility}>
                                {
                                    this.state.hidePassword ? <Icon name='eye' size={25} color='#000000' style={{ opacity: 0.5 }} /> : <Icon name='eye-off' size={25} color='#000000' style={{ opacity: 0.5 }} />
                                }
                            </TouchableOpacity>
                        </View>
                    </Card>
                    <Text style={{ textAlign: 'center', fontFamily: 'Roboto-Regular', fontSize: 14, marginTop: height * 0.01, color: '#000000', opacity: 0.5 }}>Use 8 or more characters with letters and numbers</Text>
                    <Card style={Styles.PasswordField}>
                        <TextInput
                            placeholder={'Confirm Password'}
                            secureTextEntry={this.state.hidePassword}
                            style={[Styles.TextInput, { width: '85%' }]}
                            onChangeText={confirmPassword => this.setState({ confirmPassword })}
                        ></TextInput>
                        <View style={{ width: '15%', alignItems: 'center', justifyContent: 'center' }}>
                            <TouchableOpacity onPress={this.setPasswordVisibility}>
                                {
                                    this.state.hidePassword ? <Icon name='eye' size={25} color='#000000' style={{ opacity: 0.5 }} /> : <Icon name='eye-off' size={25} color='#000000' style={{ opacity: 0.5 }} />
                                }
                            </TouchableOpacity>
                        </View>
                    </Card>
                    <Card style={{ marginTop: height * 0.03, height: 50, justifyContent: 'center', flexDirection: "row", alignItems: 'center', backgroundColor: '#0182C3' }}>
                        <TouchableOpacity
                            onPress={() => { this.handleSubmit() }}
                            // onPress={() => { this.props.navigation.navigate('SignInScreen') }}
                            style={{ width: width * 0.9, height: height * 0.07, justifyContent: 'center' }}>
                            <Text style={{ textAlign: 'center', fontFamily: 'Roboto-Medium', fontSize: 18, marginLeft: 10, color: '#FFF' }}>Continue</Text>
                        </TouchableOpacity>
                    </Card>
                    <Text style={TextStyles.OrText}>Or</Text>
                    <Card style={{ marginTop: height * 0.015, height: 50, justifyContent: 'center', flexDirection: "row", alignItems: 'center' }}>
                        <Image
                            source={require('../Assets/Icons/google.png')}
                            style={{ width: 25, height: 25 }}
                        ></Image>
                        <Text style={{ textAlign: 'center', fontFamily: 'Roboto-Medium', fontSize: 16, marginLeft: 10 }}>Sign Up with Google</Text>
                    </Card>
                    <Card style={{ marginTop: height * .03, height: 50, justifyContent: 'center', flexDirection: "row", alignItems: 'center' }}>
                        <Image
                            source={require('../Assets/Icons/facebook.png')}
                            style={{ width: 25, height: 25 }}
                        ></Image>
                        <Text style={{ textAlign: 'center', fontFamily: 'Roboto-Medium', fontSize: 16, marginLeft: 10 }}>Sign Up with Google</Text>
                    </Card>
                    <View style={{ height: height * 0.08, backgroundColor: '#F4F6F8', width: '100%', marginTop: height * 0.04, alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
                        <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 14 }}>Already have an account ? </Text>
                        <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 14, color: '#0182C3' }}>Sign In</Text>
                    </View>
                </View>
            </ScrollView>
        );
    }
}