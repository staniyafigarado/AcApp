import React, { useState } from 'react';
import { Text, View, Dimensions, TextInput, Image, FlatList, TouchableOpacity, ScrollView, BackHandler, ToastAndroid } from 'react-native';
import Styles from '../Styles/Styles';
const { width, height } = Dimensions.get('window');
import CustomHeader from '../SharedComponents/CustomHeader';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Menu from 'react-native-vector-icons/MaterialIcons';
import Cart from 'react-native-vector-icons/Feather';
import WooCommerce from '../Utils/wooApi';
import Toggle from '../SharedComponents/WhishlistToggle';
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
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [], selectedItem: null
        };
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    }

    componentDidMount = () => {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
        WooCommerce.get('products?per_page=10', { per_page: 10 }).then(response => {
            console.log(response.data + "123");
            this.setState({
                dataSource: response.data,
            });
            // this.arrayholder = response.data;
        }).catch(error => {
            console.log(error + "123");
        });
        console.log(this.state.dataSource + "Hi")
    }
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }
    handleBackButtonClick() {
        this.props.navigation.goBack(null);
        return true;
    }
    onPressHandler(item) {
        // alert(JSON.stringify(item))
        ToastAndroid.show("Item added to whishlist", ToastAndroid.SHORT);
        this.setState({ selectedItem: item });
    }

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
                        onPress={() => { this.props.navigation.navigate('ShopScreen', { productData: item }) }}
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
                    <View style={{ marginBottom: height * .13 }}>
                        <View style={{ flexDirection: 'row', paddingHorizontal: 15, marginVertical: height * .03, alignItems: 'center' }}>
                            <View style={{ width: '87%' }}>
                                <Text style={{ color: '#000000', fontFamily: 'OpenSans-Bold', fontSize: 21, }}>Featured Products</Text>
                            </View>
                            <View style={{ width: '13%' }}>
                                <TouchableOpacity onPress={() => { this.props.navigation.navigate('ShopScreen') }}>
                                    <Text style={{ color: '#000000', fontFamily: 'Roboto-Light', fontSize: 15 }}>View All</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        {/* Featured product list */}
                        <View style={{ paddingHorizontal: 5 }}>
                            <FlatList
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                data={this.state.dataSource}
                                renderItem={({ item }) => (

                                    <View style={{ height: '55%', width: 191, paddingHorizontal: 7 }}>
                                        <TouchableOpacity
                                            onPress={() => this.onPressHandler(item)}
                                            style={{ width: 25 }}>
                                            {this.state.selectedItem == item ? <View style={{ width: 25, height: 25, backgroundColor: '#FFF', alignItems: 'center', justifyContent: 'center', borderRadius: 8 }}>
                                                <FontAwesome name='heart' size={18} color='#F8444F' />
                                            </View>
                                                : <View style={{ width: 25, height: 25, backgroundColor: '#F8444F', alignItems: 'center', justifyContent: 'center', borderRadius: 8 }}>
                                                    <FontAwesome name='heart' size={15} color='#FFF' />
                                                </View>
                                            }
                                        </TouchableOpacity>
                                        <Image source={{ uri: item.images[0] ? item.images[0].src : "https://www.aiimsnagpur.edu.in/sites/default/files/inline-images/no-image-icon_27.png" }}
                                            style={{ width: '100%', height: 85, borderRadius: 15, justifyContent: 'center', alignItems: 'center' }}></Image>

                                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('ProductDetailScreen') }}>
                                            <View style={{ flexDirection: 'column', }}>
                                                <View style={{ width: '100%' }}>
                                                    <Text style={{ color: '#000000', fontFamily: 'OpenSans-Regular', fontSize: 14, }}>{item.name}</Text>
                                                </View>
                                            </View>
                                            <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', }}>
                                                <Text style={{ color: '#000000', fontFamily: 'Roboto-Light', fontSize: 12 }}>{item.average_rating} / 10.00</Text>
                                                <FontAwesome name='star' size={17} color='#FFE600' />
                                            </View>
                                            <Text style={{ color: '#0182C3', fontFamily: 'Roboto-Regular', fontSize: 14 }}>{item.categories[0].name}</Text>
                                            <Text style={{ color: '#000000', fontFamily: 'OpenSans-SemiBold', fontSize: 16, opacity: 0.5, marginTop: 10 }}>₹ {item.price}</Text>
                                        </TouchableOpacity>
                                    </View>

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