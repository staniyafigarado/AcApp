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
                            <Cart name='shopping-bag' size={26} color='#FFFFFF' />
                        </View>
                    </View>
                </View>

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
                    <Card style={{ height: 50, justifyContent: 'center' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', width: '50%', justifyContent: 'center' }}>
                                <TouchableOpacity
                                    activeOpacity={.5}
                                    style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Card style={{ width: 25, height: 25, marginTop: 5 }}>
                                        <View style={{ backgroundColor: '#FF303D', height: 25, width: 25, alignItems: 'center', justifyContent: 'center' }}>
                                            <IonIcons name='heart' size={20} color='#FFF' />
                                        </View>
                                    </Card>
                                    <Text style={{ color: '#000000', fontFamily: 'Roboto-Regular', fontSize: 14, marginLeft: 5 }}>Add to cart</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', width: '50%', justifyContent: 'center' }}>
                                <TouchableOpacity
                                    activeOpacity={.5}
                                    style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Card style={{ width: 25, height: 25, marginTop: 5 }}>
                                        <View style={{ backgroundColor: '#F8A14B', height: 25, width: 25, alignItems: 'center', justifyContent: 'center' }}>
                                            <MaterialIcons name='delete' size={20} color='#FFF' />
                                        </View>
                                    </Card>
                                    <Text style={{ color: '#000000', fontFamily: 'Roboto-Regular', fontSize: 14, marginLeft: 5 }}>Delete</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </Card>
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
                <Card style={{ marginTop: height * 0.03, height: 50, justifyContent: 'center', flexDirection: "row", alignItems: 'center', backgroundColor: '#F89E44' }}>
                    <TouchableOpacity
                        onPress={() => { this.props.navigation.navigate('CartConfirmScreen') }}
                        style={{ width: width * 0.9, height: height * 0.07, justifyContent: 'center' }}>
                        <Text style={{ textAlign: 'center', fontFamily: 'Roboto-Medium', fontSize: 18, marginLeft: 10, color: '#FFF' }}>Place Order</Text>
                    </TouchableOpacity>
                </Card>
                <View style={{ flexDirection: 'row', marginVertical: height * .02, alignItems: 'center' }}>
                    <View style={{ width: '77%' }}>
                        <Text style={{ color: '#000000', fontFamily: 'OpenSans-Bold', fontSize: 21, }}>Whishlist</Text>
                    </View>
                    <View style={{ width: '13%' }}>
                        <Text style={{ color: '#000000', fontFamily: 'Roboto-Light', fontSize: 15 }}>View All</Text>
                    </View>
                </View>
                <TouchableOpacity style={{ paddingHorizontal: 10, left: -5, marginBottom: 20 }}>
                    <Card style={{ height: height * .14, alignItems: 'center', padding: 10, flexDirection: 'row' }}>
                        <Image source={require('../Assets/Images/ac.png')}
                            style={{ width: 80, height: 80 }}></Image>
                        <View style={{ flexDirection: 'column', marginLeft: 10 }}>
                            <Text style={{ color: '#000000', fontFamily: 'Roboto-Regular', fontSize: 14 }}>Samsung</Text>
                            <Text style={{ color: '#000000', fontFamily: 'OpenSans-Regular', fontSize: 16 }}>1 Ton Split AC</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Card style={{ width: 25, height: 25, marginTop: 5 }}>
                                        <View style={{ backgroundColor: '#0182C3', height: 25, width: 25, alignItems: 'center', justifyContent: 'center' }}>
                                            <IonIcons name='add' size={20} color='#FFF' />
                                        </View>
                                    </Card>
                                    <Text style={{ color: '#000000', fontFamily: 'Roboto-Regular', fontSize: 14, marginLeft: 5 }}>Add to cart</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>
                                    <Card style={{ width: 25, height: 25, marginTop: 5 }}>
                                        <View style={{ backgroundColor: '#F8A14B', height: 25, width: 25, alignItems: 'center', justifyContent: 'center' }}>
                                            <MaterialIcons name='delete' size={20} color='#FFF' />
                                        </View>
                                    </Card>
                                    <Text style={{ color: '#000000', fontFamily: 'Roboto-Regular', fontSize: 14, marginLeft: 5 }}>Delete</Text>
                                </View>
                            </View>
                        </View>

                    </Card>
                </TouchableOpacity>
            </View>
        )
    }
}