import React, { useState } from 'react';
import { Text, View, Dimensions, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';
import TextStyles from '../Styles/TextStyles';
import Styles from '../Styles/Styles';
import Card from '../SharedComponents/CustomCard';
import Icon from 'react-native-vector-icons/Ionicons';
const { width, height } = Dimensions.get('window');
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hidePassword: true
        };
    }
    setPasswordVisibility = () => {
        this.setState({ hidePassword: !this.state.hidePassword });
    }
    render() {
        return (
            <View style={[Styles.Container, { justifyContent: 'center' }]}>
                <Text style={[TextStyles.TitleText]}>Create an account</Text>
                <Card style={[Styles.PasswordField, { marginTop: height * 0.09 }]}>
                    <TextInput
                        placeholder={'New Password'}
                        secureTextEntry={this.state.hidePassword}
                        style={[Styles.TextInput, { width: '85%' }]}
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
                        placeholder={'Confirm New Password'}
                        secureTextEntry={this.state.hidePassword}
                        style={[Styles.TextInput, { width: '85%' }]}
                    ></TextInput>
                    <View style={{ width: '15%', alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity onPress={this.setPasswordVisibility}>
                            {
                                this.state.hidePassword ? <Icon name='eye' size={25} color='#000000' style={{ opacity: 0.5 }} /> : <Icon name='eye-off' size={25} color='#000000' style={{ opacity: 0.5 }} />
                            }
                        </TouchableOpacity>
                    </View>
                </Card>
                <Card style={{ marginTop: height * 0.09, height: 50, justifyContent: 'center', flexDirection: "row", alignItems: 'center', backgroundColor: '#0182C3' }}>
                    <TouchableOpacity
                        onPress={() => { this.props.navigation.navigate('SignInScreen') }}
                        style={{ width: width * 0.9, height: height * 0.07, justifyContent: 'center' }}>
                        <Text style={{ textAlign: 'center', fontFamily: 'Roboto-Medium', fontSize: 18, marginLeft: 10, color: '#FFF' }}>Continue</Text>
                    </TouchableOpacity>
                </Card>
            </View>
        );
    }
}