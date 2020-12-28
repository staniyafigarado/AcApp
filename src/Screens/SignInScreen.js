import React from 'react';
import { Text, View, Dimensions, TextInput, TouchableOpacity, Image } from 'react-native';
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
                <Text style={[TextStyles.TitleText]}>Sign In</Text>
                <Card style={Styles.CustomCard}>
                    <TextInput
                        placeholder={'Email Address'}
                        style={Styles.TextInput}
                    ></TextInput>
                </Card>
                <Card style={Styles.PasswordField}>
                    <TextInput
                        placeholder={'Password'}
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
                <TouchableOpacity
                    onPress={() => { this.props.navigation.navigate('Forgot') }}
                    style={{ alignSelf: 'flex-end', marginRight: width * 0.05 }}>
                    <Text style={[TextStyles.OrText]}>Forgot Password ?</Text>
                </TouchableOpacity>
                <Card style={{ marginTop: height * 0.03, height: 50, justifyContent: 'center', flexDirection: "row", alignItems: 'center', backgroundColor: '#0182C3' }}>
                    <TouchableOpacity
                        onPress={() => { this.props.navigation.navigate('HomeScreen') }}
                        style={{ width: width * 0.9, height: height * 0.07, justifyContent: 'center' }}>
                        <Text style={{ textAlign: 'center', fontFamily: 'Roboto-Medium', fontSize: 18, marginLeft: 10, color: '#FFF' }}>Sign In</Text>
                    </TouchableOpacity>
                </Card>
                <Text style={[TextStyles.OrText, { marginTop: height * 0.02 }]}>Or</Text>
                <Card style={{ marginTop: height * 0.02, height: 50, justifyContent: 'center', flexDirection: "row", alignItems: 'center' }}>
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
            </View>
        );
    }
}