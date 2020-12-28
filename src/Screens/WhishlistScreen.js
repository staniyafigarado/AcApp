import React, { useState } from 'react';
import { Text, View, Dimensions, TextInput, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import Styles from '../Styles/Styles';
import Card from '../SharedComponents/CustomCard';
import CustomHeader from '../SharedComponents/CustomHeader';
const { width, height } = Dimensions.get('window');
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import Menu from 'react-native-vector-icons/MaterialIcons';
import Cart from 'react-native-vector-icons/Feather';
const Ac = require('../Assets/Images/ac.png');
const data = [
    {
        id: '1',
        image: Ac,
        title: 'Samsung',
        subTitle: '1 Ton Split Ac'
    },
    {
        id: '2',
        image: Ac,
        title: 'Samsung',
        subTitle: '1 Ton Split Ac'
    },
    {
        id: '3',
        image: Ac,
        title: 'Samsung',
        subTitle: '1 Ton Split Ac'
    },
    {
        id: '4',
        image: Ac,
        title: 'Samsung',
        subTitle: '1 Ton Split Ac'
    },

]
export default class App extends React.Component {
    render() {
        return (
            <View style={[Styles.Container]}>
                {/* <CustomHeader style={{ height: height * .15 }} /> */}
                {/* Header */}
                <View style={[Styles.HeaderStyle, { height: height * .15 }]}>
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
                </View>
                <View style={{ flexDirection: 'row', marginVertical: height * .03, alignItems: 'center' }}>
                    <View style={{ width: '87%' }}>
                        <Text style={{ color: '#000000', fontFamily: 'OpenSans-Bold', fontSize: 21, }}>Whishlist</Text>
                    </View>
                    {/* <View style={{ width: '13%' }}>
                            <Text style={{ color: '#000000', fontFamily: 'Roboto-Light', fontSize: 15 }}>View All</Text>
                        </View> */}
                </View>
                <View style={{ alignItems: 'center' }}>
                    <FlatList
                        data={data}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={{ marginTop: 10, paddingHorizontal: 10, left: -5, marginBottom: 7 }}>
                                <Card style={{ height: height * .14, alignItems: 'center', padding: 10, flexDirection: 'row' }}>
                                    <Image source={item.image}
                                        style={{ width: 80, height: 80 }}></Image>
                                    <View style={{ flexDirection: 'column', marginLeft: 10 }}>
                                        <Text style={{ color: '#000000', fontFamily: 'Roboto-Regular', fontSize: 14 }}>{item.title}</Text>
                                        <Text style={{ color: '#000000', fontFamily: 'OpenSans-Regular', fontSize: 16 }}>{item.subTitle}</Text>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <Card style={{ width: 25, height: 25, marginTop: 5 }}>
                                                    <View style={{ backgroundColor: '#0182C3', height: 25, width: 25, alignItems: 'center', justifyContent: 'center' }}>
                                                        <Icon name='add' size={20} color='#FFF' />
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
                        )}
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>
        )
    }
}