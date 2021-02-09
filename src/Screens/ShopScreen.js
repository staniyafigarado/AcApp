import React, { useState } from 'react';
import { Text, View, Dimensions, TextInput, Image, FlatList, TouchableOpacity, ScrollView, ToastAndroid } from 'react-native';
import Styles from '../Styles/Styles';
const { width, height } = Dimensions.get('window');
import CustomHeader from '../SharedComponents/CustomHeader';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Menu from 'react-native-vector-icons/MaterialIcons';
import Cart from 'react-native-vector-icons/Feather';
import WooCommerce from '../Utils/wooApi';
const Ac = require('../Assets/Images/lg.png');
const Ac1 = require('../Assets/Images/ac.png');
const data = [
    {
        id: '1',
        image: Ac,
    },
    {
        id: '2',
        image: Ac,
    },
    {
        id: '3',
        image: Ac,
    },
    {
        id: '4',
        image: Ac,
    },

]
const data1 = [
    {
        id: '1',
        title: '1 Ton Split Ac',
        image: Ac1,
        price: 33000,
        rating: 4.1,
        brand: 'Samsung'
    },
    {
        id: '2',
        title: '1 Ton Split Ac',
        image: Ac1,
        price: 33000,
        rating: 4.1,
        brand: 'Samsung'
    },
    {
        id: '3',
        title: '1 Ton Split Ac',
        image: Ac1,
        price: 33000,
        rating: 4.1,
        brand: 'Samsung'
    },
    {
        id: '4',
        title: '1 Ton Split Ac',
        image: Ac1,
        price: 33000,
        rating: 4.1,
        brand: 'Samsung'
    },
    {
        id: '5',
        title: '1 Ton Split Ac',
        image: Ac1,
        price: 33000,
        rating: 4.1,
        brand: 'Samsung'
    },
    {
        id: '6',
        title: '1 Ton Split Ac',
        image: Ac1,
        price: 33000,
        rating: 4.1,
        brand: 'Samsung'
    }
]
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [], selectedItem: null
        };
    }
    componentDidMount = () => {
        WooCommerce.get('products?per_page=100', { per_page: 100 }).then(response => {
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
    onPressHandler(item) {
        // alert(JSON.stringify(item))
        ToastAndroid.show("Item added to whishlist", ToastAndroid.SHORT);
        this.setState({ selectedItem: item });
    }

    _onPress(item) {
        this.props.navigation.navigate('ProductDetailScreen', {
            Id: item.id,
        });
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
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
                <ScrollView>
                    <View style={{ flexDirection: 'row', paddingHorizontal: 15, marginVertical: height * .03, alignItems: 'center' }}>
                        <View style={{ width: '87%' }}>
                            <Text style={{ color: '#000000', fontFamily: 'OpenSans-Bold', fontSize: 21, }}>Shop By Brand</Text>
                        </View>
                        <View style={{ width: '13%' }}>
                            <Text style={{ color: '#000000', fontFamily: 'Roboto-Light', fontSize: 15 }}>View All</Text>
                        </View>
                    </View>
                    <View style={{ paddingHorizontal: 4 }}>
                        <FlatList
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            data={data}
                            renderItem={({ item }) => (
                                <TouchableOpacity style={{ marginHorizontal: 10 }}>
                                    <View style={{ borderWidth: 2, borderColor: 'lightgray', width: 100, height: 50, alignItems: 'center', justifyContent: 'center' }}>
                                        <Image source={item.image}
                                            style={{ width: 50, height: 50 }}></Image>
                                    </View>
                                </TouchableOpacity>
                            )}
                            keyExtractor={item => item.id}
                        />
                    </View>
                    <View style={{ paddingHorizontal: 5, paddingVertical: height * .05 }}>
                        <FlatList
                            numColumns={2}
                            data={this.state.dataSource}
                            renderItem={({ item }) => (
                                <View style={{ height: '55%', width: '50%', paddingHorizontal: 7, marginBottom: 10 }}>
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

                                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('ProductDetailScreen', { petData: item }) }}>
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
                    </View>
                </ScrollView>
            </View>
        );
    }
}
