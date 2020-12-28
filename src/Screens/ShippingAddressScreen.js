import React, { useState } from 'react';
import { Text, View, Dimensions, TextInput, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import Styles from '../Styles/Styles';
import Card from '../SharedComponents/CustomCard';
import CustomHeader from '../SharedComponents/CustomHeader';
import IonIcons from 'react-native-vector-icons/Ionicons';
import Cart from 'react-native-vector-icons/Feather';
const { width, height } = Dimensions.get('window');
export default class App extends React.Component {
    render() {
        return (
            <View style={[Styles.Container, { flexDirection: 'column' }]}>
                {/* Header */}
                <View style={[Styles.HeaderStyle, { height: height * .15 }]}>
                    <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center', marginTop: 20 }}>
                        <View style={{ width: '10%', alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => { this.props.navigation.goBack() }}>
                                <IonIcons name='arrow-back' size={30} color='#FFFFFF' />
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: '80%', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'OpenSans-SemiBold', fontSize: 20, color: '#FFFFFF', }}>LOGO</Text>
                        </View>
                        <View style={{ width: '10%', alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('CartScreen') }}>
                                <Cart name='shopping-bag' size={26} color='#FFFFFF' />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: height * .03, alignItems: 'center' }}>
                    <View style={{ width: '87%' }}>
                        <Text style={{ color: '#000000', fontFamily: 'OpenSans-Bold', fontSize: 21, }}>Address</Text>
                    </View>
                    {/* <View style={{ width: '13%' }}>
                            <Text style={{ color: '#000000', fontFamily: 'Roboto-Light', fontSize: 15 }}>View All</Text>
                        </View> */}
                </View>
                <Card style={{ marginTop: height * .03 }}>
                    <TextInput
                        placeholder={'Name'}
                        style={Styles.TextInput}
                    ></TextInput>
                </Card>
                <Card style={{ marginTop: height * .03 }}>
                    <TextInput
                        placeholder={'Phone Number'}
                        keyboardType={'number-pad'}
                        autoCorrect={false}
                        style={Styles.TextInput}
                    ></TextInput>
                </Card>
                <Card style={{ marginTop: height * .03 }}>
                    <TextInput
                        placeholder={'Address'}
                        style={Styles.TextInput}
                    ></TextInput>
                </Card>
                <Card style={{ marginTop: height * .03 }}>
                    <TextInput
                        placeholder={'City'}
                        style={Styles.TextInput}
                    ></TextInput>
                </Card>
                <Card style={{ marginTop: height * .03 }}>
                    <TextInput
                        placeholder={'Pincode'}
                        keyboardType={'number-pad'}
                        autoCorrect={false}
                        style={Styles.TextInput}
                    ></TextInput>
                </Card>
                <View style={{ flex: 2, flexDirection: 'column-reverse' }}>
                    <TouchableOpacity
                        onPress={() => { this.props.navigation.navigate('PaymentMethodScreen') }}
                        style={{ justifyContent: 'flex-end', backgroundColor: '#F89E44', width: width * 1, height: height * 0.07, alignItems: 'center' }}>
                        <Text style={{ textAlign: 'center', fontFamily: 'Roboto-Medium', fontSize: 18, color: '#FFF', marginBottom: 10 }}>Proceed</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}