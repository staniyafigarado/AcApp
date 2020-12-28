import React, { useState } from 'react';
import { Text, View, Dimensions, TextInput, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import Styles from '../Styles/Styles';
import CustomHeader from '../SharedComponents/CustomHeader';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Card from '../SharedComponents/CustomCard';
import Menu from 'react-native-vector-icons/MaterialIcons';
import Cart from 'react-native-vector-icons/Feather';
const { width, height } = Dimensions.get('window');
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

]
export default class App extends React.Component {
    render() {
        return (
            <View style={[Styles.Container]}>
                {/* <CustomHeader style={{ height: height * .4, alignItems: 'center' }}>
                    <Image source={require('../Assets/Images/account.png')}
                        style={{ width: 80, height: 80, borderRadius: 50, marginTop: height * .05 }}></Image>
                    <View style={{ flexDirection: 'row', paddingHorizontal: 15, alignItems: 'center' }}>
                        <View style={{}}>
                            <Text style={{ color: '#FFF', fontFamily: 'OpenSans-SemiBold', fontSize: 16, }}>Book your service</Text>
                        </View>
                        <TouchableOpacity
                            onPress={() => { this.props.navigation.navigate('EditAccountScreen') }}
                            style={{ padding: 5, marginLeft: width * .02 }}>
                            <FontAwesome name='edit' size={20} color='#FFF' />
                        </TouchableOpacity>
                    </View>
                    <Text style={{ color: '#FFF', fontFamily: 'Roboto-Light', fontSize: 16, }}>johndoe@gmail.com</Text>
                </CustomHeader> */}
                <View style={[Styles.HeaderStyle, { height: height * .4 }]}>
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
                    <View style={{ alignItems: 'center' }}>
                        <Image source={require('../Assets/Images/account.png')}
                            style={{ width: 80, height: 80, borderRadius: 50, marginTop: height * .04 }}></Image>
                        <View style={{ flexDirection: 'row', paddingHorizontal: 15, alignItems: 'center' }}>
                            <View style={{}}>
                                <Text style={{ color: '#FFF', fontFamily: 'OpenSans-SemiBold', fontSize: 16, }}>Book your service</Text>
                            </View>
                            <TouchableOpacity
                                onPress={() => { this.props.navigation.navigate('EditAccountScreen') }}
                                style={{ padding: 5, marginLeft: width * .02 }}>
                                <FontAwesome name='edit' size={20} color='#FFF' />
                            </TouchableOpacity>
                        </View>
                        <Text style={{ color: '#FFF', fontFamily: 'Roboto-Light', fontSize: 16, }}>johndoe@gmail.com</Text>
                    </View>
                </View>
                <ScrollView>
                    <View style={{ paddingHorizontal: width * .04 }}>
                        <View style={{ flexDirection: 'row', marginVertical: height * .03, alignItems: 'center' }}>
                            <View style={{ width: '87%' }}>
                                <Text style={{ color: '#000000', fontFamily: 'OpenSans-Bold', fontSize: 21, }}>Orders</Text>
                            </View>
                            <View style={{ width: '13%' }}>
                                <Text style={{ color: '#000000', fontFamily: 'Roboto-Light', fontSize: 15 }}>View All</Text>
                            </View>
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
                                            </View>
                                        </Card>
                                    </TouchableOpacity>
                                )}
                                keyExtractor={item => item.id}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', marginVertical: height * .03, alignItems: 'center' }}>
                            <View style={{ width: '87%' }}>
                                <Text style={{ color: '#000000', fontFamily: 'OpenSans-Bold', fontSize: 21, }}>Address</Text>
                            </View>
                            {/* <View style={{ width: '13%' }}>
                            <Text style={{ color: '#000000', fontFamily: 'Roboto-Light', fontSize: 15 }}>View All</Text>
                        </View> */}
                        </View>
                        <View style={{ alignItems: 'center', marginBottom: 20 }}>
                            <Card style={{ height: height * .14, justifyContent: 'center', padding: 10 }}>
                                <Text style={{ color: '#000000', fontFamily: 'Roboto-Regular', fontSize: 16 }}>John Doe</Text>
                                <Text style={{ color: '#000000', fontFamily: 'Roboto-Regular', fontSize: 16 }}>MG 22 ,House, Street ,India</Text>
                                <Text style={{ color: '#000000', fontFamily: 'Roboto-Regular', fontSize: 16 }}>Thrissur,680010</Text>
                            </Card>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}