import React, { useState } from 'react';
import { Text, View, Dimensions, TextInput, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import Styles from '../Styles/Styles';
const { width, height } = Dimensions.get('window');
import CustomHeader from '../SharedComponents/CustomHeader';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Menu from 'react-native-vector-icons/MaterialIcons';
import Cart from 'react-native-vector-icons/Feather';
import Card from '../SharedComponents/CustomCard';
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
    }
    // componentDidMount = () => {
    //     setTimeout(() => {
    //         this.setState({ visible: true });
    //     }, 2000);
    // }
    setVisibility = () => {
        this.setState({ visible: true });
        setTimeout(() => {
            this.setState({ visible: false });
        }, 1000);
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
                    <View style={{ alignItems: 'center', marginTop: 10 }}>
                        <Image source={require('../Assets/Images/ac.png')}
                            style={{ width: width * .9, height: 150 }}></Image>
                    </View>
                    <View style={{ padding: 15 }}>
                        <Text style={{ color: '#000000', fontFamily: 'OpenSans-Regular', fontSize: 18, }}>1 Ton Split Ac</Text>
                        <Text style={{ color: '#0182C3', fontFamily: 'Roboto-Regular', fontSize: 14, }}>Samsung</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <Text style={{ color: '#000000', fontFamily: 'Roboto-Light', fontSize: 12, marginRight: 5 }}>4 / 5</Text>
                            <FontAwesome name='star' size={17} color='#FFE600' />
                            <Text style={{ color: '#000000', fontFamily: 'Roboto-Light', fontSize: 12, marginLeft: 7 }}>(1,1023 reviews)</Text>

                        </View>
                        <Text style={{ color: '#000000', fontFamily: 'OpenSans-SemiBold', fontSize: 16, }}>₹ 33,000</Text>
                        <TouchableOpacity onPress={() => { this.setVisibility() }}>
                            <View style={{ borderWidth: 2, borderColor: '#F89E44', width: '100%', height: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 5, marginTop: 10 }}>
                                <Text style={{ color: '#000000', fontFamily: 'OpenSans-SemiBold', fontSize: 16, }}>ADD TO CART</Text>
                            </View>
                        </TouchableOpacity>
                        <Card style={{ marginTop: height * 0.03, height: 50, justifyContent: 'center', flexDirection: "row", alignItems: 'center', backgroundColor: '#0182C3' }}>
                            <TouchableOpacity
                                onPress={() => { this.props.navigation.navigate('HomeScreen') }}
                                style={{ width: width * 0.9, height: height * 0.07, justifyContent: 'center' }}>
                                <Text style={{ textAlign: 'center', fontFamily: 'Roboto-Medium', fontSize: 18, marginLeft: 10, color: '#FFF' }}>Buy Now</Text>
                            </TouchableOpacity>
                        </Card>
                        <Text style={{ color: '#000000', fontFamily: 'OpenSans-Bold', fontSize: 21, marginTop: 10 }}>Featured Products</Text>
                        <View style={{ marginTop: 10 }}>
                            <Text style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no</Text>
                        </View>
                        <Text style={{ color: '#000000', fontFamily: 'OpenSans-Bold', fontSize: 21, marginTop: 10 }}>Specifications</Text>
                        <View style={{ marginTop: 10 }}>
                            <Text style={{ textAlign: 'justify' }}>1.5 Ton for room size upto 150 sq ft</Text>
                            <Text style={{ textAlign: 'justify' }}>1.5 Ton for room size upto 150 sq ft</Text>
                            <Text style={{ textAlign: 'justify' }}>1.5 Ton for room size upto 150 sq ft</Text>
                        </View>
                        <Text style={{ color: '#000000', fontFamily: 'OpenSans-Bold', fontSize: 21, marginTop: 10 }}>Reviews</Text>
                        <View style={{ marginTop: 10 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                <Text style={{ color: '#000000', fontFamily: 'Roboto-Light', fontSize: 12, marginRight: 5 }}>4 / 5</Text>
                                <FontAwesome name='star' size={17} color='#FFE600' />
                            </View>
                            <Text style={{ textAlign: 'justify', marginTop: 5 }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no</Text>
                        </View>
                        <Text style={{ color: '#000000', fontFamily: 'OpenSans-Bold', fontSize: 21, marginTop: 10 }}>Write a Review</Text>
                        <View style={{ width: '100%', height: height * .2, borderWidth: 1, borderColor: 'lightgray', opacity: .7, marginTop: 10 }}>
                            <TextInput
                                placeholder={"Write yor review here"}
                                returnKeyType='previous'
                                multiline={true}></TextInput>
                        </View>
                        <View style={{ width: width * .35, height: 50, backgroundColor: '#0182C3', justifyContent: 'center', borderRadius: 7, marginVertical: 10 }}>
                            <Text style={{ textAlign: 'center', fontFamily: 'Roboto-Medium', fontSize: 18, marginLeft: 10, color: '#FFF' }}>Send</Text>
                        </View>
                        {
                            this.state.visible == true ? <View style={{ justifyContent: 'center', alignItems: 'center', position: 'absolute', width: 150, height: 40, backgroundColor: '#000000', borderRadius: 20, flexDirection: 'row', marginLeft: width * .3 }}>
                                <FontAwesome name='shopping-cart' size={17} color='#FFF' />
                                <Text style={{ textAlign: 'center', color: '#FFF', marginLeft: 10 }}>Added to cart</Text>
                            </View> : null
                        }
                    </View>

                </ScrollView>
            </View>
        )
    }
}