import React, { useState } from 'react';
import { Text, View, Dimensions, TextInput, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import Styles from '../Styles/Styles';
const { width, height } = Dimensions.get('window');
import CustomHeader from '../SharedComponents/CustomHeader';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Menu from 'react-native-vector-icons/MaterialIcons';
import Cart from 'react-native-vector-icons/Feather';
const Ac = require('../Assets/Images/ac.png');
const data = [
    {
        id: '1',
        title: '1 Ton Split Ac',
        image: Ac,
        price: 33000,
        rating: 4.1,
        brand: 'Samsung'
    },
    {
        id: '2',
        title: '1 Ton Split Ac',
        image: Ac,
        price: 33000,
        rating: 4.1,
        brand: 'Samsung'
    },
    {
        id: '3',
        title: '1 Ton Split Ac',
        image: Ac,
        price: 33000,
        rating: 4.1,
        brand: 'Samsung'
    }
]
const data1 = [
    {
        id: 1,
        price: '20,000'
    },
    {
        id: 2,
        price: '30,000'
    },
    {
        id: 3,
        price: '35,000'
    },
    {
        id: 4,
        price: '40,000'
    }
]
export default class App extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
                <View style={[Styles.HeaderStyle]}>
                    <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center', marginTop: 20 }}>
                        <View style={{ width: '10%', alignItems: 'center' }}>
                            <TouchableOpacity
                                onPress={() => { this.props.navigation.toggleDrawer(); }}
                            >
                                <Menu name='menu' size={30} color='#FFFFFF' />
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
                    <View style={Styles.SearchStyle}>
                        <View style={{ width: '90%' }}>
                            <Text style={{ fontFamily: 'Roboto-Light', fontSize: 14 }}>Search for your brands</Text>
                        </View>
                        <View style={{ width: '10%' }}>
                            <Icon name='filter-variant' size={25} color='#000000' style={{ opacity: 0.6 }} />
                        </View>
                    </View>
                </View>
                {/* <CustomHeader>
                    <View style={Styles.SearchStyle}>
                        <View style={{ width: '90%' }}>
                            <Text style={{ fontFamily: 'Roboto-Light', fontSize: 14 }}>Search for your brands</Text>
                        </View>
                        <View style={{ width: '10%' }}>
                            <Icon name='filter-variant' size={25} color='#000000' style={{ opacity: 0.6 }} />
                        </View>
                    </View>
                </CustomHeader> */}
                <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'center' }}>
                    <TouchableOpacity
                        onPress={() => { this.props.navigation.navigate('ShopScreen') }}
                        style={{ backgroundColor: '#0182C3', height: height * .11, width: '43%', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, borderRadius: 3 }}>
                        <Image source={require('../Assets/Icons/shop.png')}
                            style={{ width: 60, height: 60 }}></Image>
                        <View style={{ flexDirection: 'column', }}>
                            <Text style={{ fontFamily: "OpenSans-SemiBold", color: '#FFFFFF', fontSize: 19 }}>Shop</Text>
                            <Text style={{ fontFamily: "Roboto-Light", color: '#FFFFFF', fontSize: 13 }}>1000+ Products</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { this.props.navigation.navigate('ServiceBookingScreen') }}
                        style={{ backgroundColor: '#F89E44', height: height * .11, width: '43%', flexDirection: 'row', marginLeft: 15, alignItems: 'center', paddingHorizontal: 10, borderRadius: 3 }}>
                        <Image source={require('../Assets/Icons/service.png')}
                            style={{ width: 60, height: 60 }}></Image>
                        <View style={{ flexDirection: 'column', }}>
                            <Text style={{ fontFamily: "OpenSans-SemiBold", color: '#FFFFFF', fontSize: 19 }}>Service</Text>
                            <Text style={{ fontFamily: "Roboto-Light", color: '#FFFFFF', fontSize: 13 }}>All Brands</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <View style={{ marginBottom: height * .12 }}>
                        <View style={{ flexDirection: 'row', paddingHorizontal: 15, marginVertical: height * .03, alignItems: 'center' }}>
                            <View style={{ width: '87%' }}>
                                <Text style={{ color: '#000000', fontFamily: 'OpenSans-Bold', fontSize: 21, }}>Featured Products</Text>
                            </View>
                            <View style={{ width: '13%' }}>
                                <Text style={{ color: '#000000', fontFamily: 'Roboto-Light', fontSize: 15 }}>View All</Text>
                            </View>
                        </View>
                        {/* Featured product list */}
                        <View style={{ paddingHorizontal: 5 }}>
                            <FlatList
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                data={data}
                                renderItem={({ item }) => (
                                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('ProductDetailScreen') }}>
                                        <View style={{ height: 190, width: 191, paddingHorizontal: 7 }}>
                                            <Image source={item.image}
                                                style={{ width: '100%', height: 120, borderRadius: 15 }}></Image>
                                            <View style={{ width: 25, height: 25, backgroundColor: '#F8444F', alignItems: 'center', justifyContent: 'center', borderRadius: 8, position: 'absolute', marginLeft: 15, marginTop: 15 }}>
                                                <FontAwesome name='heart' size={15} color='#FFF' />
                                            </View>
                                            <View style={{ flexDirection: 'row', }}>
                                                <View style={{ width: '70%' }}>
                                                    <Text style={{ color: '#000000', fontFamily: 'OpenSans-Regular', fontSize: 18, }}>{item.title}</Text>
                                                </View>
                                                <View style={{ width: '30%', flexDirection: 'row', alignItems: 'center', }}>
                                                    <Text style={{ color: '#000000', fontFamily: 'Roboto-Light', fontSize: 12, marginRight: 5 }}>{item.rating} / 5</Text>
                                                    <FontAwesome name='star' size={17} color='#FFE600' />
                                                </View>
                                            </View>
                                            <Text style={{ color: '#0182C3', fontFamily: 'Roboto-Regular', fontSize: 14 }}>{item.brand}</Text>
                                            <Text style={{ color: '#000000', fontFamily: 'OpenSans-SemiBold', fontSize: 16, opacity: 0.5, marginTop: 10 }}>₹ {item.price}</Text>
                                        </View>
                                    </TouchableOpacity>
                                )}
                                keyExtractor={item => item.id}
                            // extraData={selected}
                            />
                            <Text style={{ color: '#000000', fontFamily: 'OpenSans-Bold', fontSize: 21, paddingHorizontal: 10, marginVertical: height * .02 }}>Shop By Price</Text>
                            {/* shop by price */}
                            <View>
                                <FlatList
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                    data={data1}
                                    renderItem={({ item }) => (
                                        <TouchableOpacity style={{ marginHorizontal: 10 }}>
                                            <View style={{ backgroundColor: '#0182C3', height: 80, width: 80, borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}>
                                                <Text style={{ fontFamily: 'Roboto-Light', fontSize: 14, color: '#FFFFFF' }}>Less than</Text>
                                                <Text style={{ fontFamily: 'OpenSans-SemiBold', fontSize: 16, color: '#FFFFFF', marginTop: 5 }}>₹ {item.price}</Text>
                                            </View>
                                        </TouchableOpacity>
                                    )}
                                    keyExtractor={item => item.id}
                                />

                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}