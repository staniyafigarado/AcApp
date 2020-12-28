import React, { useState } from 'react';
import { Text, View, Dimensions, TextInput, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import Styles from '../Styles/Styles';
import Card from '../SharedComponents/CustomCard';
import CustomHeader from '../SharedComponents/CustomHeader';
import IonIcons from 'react-native-vector-icons/Ionicons';
import Cart from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const { width, height } = Dimensions.get('window');
export default class App extends React.Component {
    render() {
        return (
            <View style={[Styles.Container, { flexDirection: 'column' }]}>
                {/* header */}
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

                {/* Item */}
                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                    <View style={{ flexDirection: 'row', width: width * .9 }}>
                        <Image source={require('../Assets/Images/ac.png')}
                            style={{ width: 80, height: 80 }}></Image>
                        <View style={{ flexDirection: 'column', marginLeft: 10 }}>
                            <Text style={{ color: '#000000', fontFamily: 'Roboto-Regular', fontSize: 14 }}>Samsung</Text>
                            <Text style={{ color: '#000000', fontFamily: 'OpenSans-Regular', fontSize: 16 }}>1 Ton Split AC</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: '#F89E44', fontFamily: 'OpenSans-SemiBold', fontSize: 16 }}>₹ 33,000</Text>
                                <Text style={{ color: '#00CF68', fontFamily: 'Roboto-Light', fontSize: 16, marginLeft: 10 }}>In Stock</Text>
                            </View>
                            <View style={{ width: width * .2, height: 30, borderWidth: 2, borderColor: 'lightgray', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginTop: height * .01 }}>
                                <Text style={{ color: '#101010', fontFamily: 'Roboto-Light', fontSize: 12 }}>Qty</Text>
                                <Text style={{ color: '#101010', fontFamily: 'OpenSans-SemiBold', fontSize: 12, marginLeft: 10 }}>1</Text>
                            </View>
                        </View>
                    </View>
                </View>
                {/* Total */}
                <View style={{ flexDirection: 'row', marginVertical: height * .03, alignItems: 'center' }}>
                    <View style={{ width: '90%' }}>
                        <Text style={{ color: '#000000', fontFamily: 'OpenSans-Bold', fontSize: 21, }}>Details</Text>
                    </View>
                    {/* <View style={{ width: '13%' }}>
                            <Text style={{ color: '#000000', fontFamily: 'Roboto-Light', fontSize: 15 }}>View All</Text>
                        </View> */}
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, }}>
                    <View style={{ width: '80%' }}>
                        <Text style={{ color: '#000000', fontFamily: 'Roboto-Regular', fontSize: 18, opacity: .5 }}>Price * 1</Text>
                    </View>
                    <View style={{ width: '20%' }}>
                        <Text style={{ color: '#000000', fontFamily: 'Roboto-Regular', fontSize: 18, textAlign: 'right', opacity: .5 }}>66,000</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, marginVertical: height * .01 }}>
                    <View style={{ width: '80%' }}>
                        <Text style={{ color: '#000000', fontFamily: 'Roboto-Regular', fontSize: 18, opacity: .5 }}>Tax</Text>
                    </View>
                    <View style={{ width: '20%' }}>
                        <Text style={{ color: '#000000', fontFamily: 'Roboto-Regular', fontSize: 18, textAlign: 'right', opacity: .5 }}>100</Text>
                    </View>
                </View>
                <View style={{ borderBottomColor: 'lightgray', borderTopWidth: 1 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, marginVertical: height * .01 }}>
                        <View style={{ width: '80%' }}>
                            <Text style={{ color: '#000000', fontFamily: 'Roboto-Regular', fontSize: 18 }}>Total</Text>
                        </View>
                        <View style={{ width: '20%' }}>
                            <Text style={{ color: '#000000', fontFamily: 'Roboto-Bold', fontSize: 18, textAlign: 'right' }}>66,100</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flex: 2, flexDirection: 'column-reverse' }}>
                    <TouchableOpacity
                        onPress={() => { this.props.navigation.navigate('ShippingAddressScreen') }}
                        style={{ justifyContent: 'flex-end', backgroundColor: '#F89E44', width: width * 1, height: height * 0.07, alignItems: 'center' }}>
                        <Text style={{ textAlign: 'center', fontFamily: 'Roboto-Medium', fontSize: 18, color: '#FFF', marginBottom: 10 }}>Proceed</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}