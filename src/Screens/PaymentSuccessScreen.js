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

                <View style={{ flex: 1, width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                    <IonIcons name='checkmark-circle-outline' size={50} color='#0182C3' />
                    <Text style={{ fontFamily: 'OpenSans-SemiBold', fontSize: 20, color: '#000000' }}>Order Placed</Text>
                    <Text style={{ fontFamily: 'OpenSans-Bold', fontSize: 31, color: '#0182C3' }}>Successfully</Text>
                    <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 16, color: '#000000', opacity: .5 }}>Your order id : 102145121012</Text>

                </View>
                <View style={{ flex: .2 }}>
                    <Card style={{ marginTop: height * 0.03, height: 50, flexDirection: "row", alignItems: 'center', backgroundColor: '#F89E44', justifyContent: 'flex-end' }}>
                        <TouchableOpacity
                            onPress={() => { this.props.navigation.navigate('ShopScreen') }}
                            style={{ width: width * 0.9, height: height * 0.07, justifyContent: 'center' }}>
                            <Text style={{ textAlign: 'center', fontFamily: 'Roboto-Medium', fontSize: 18, color: '#FFF' }}>Go to Shop</Text>
                        </TouchableOpacity>
                    </Card>
                </View>
            </View>
        )
    }
}
// const Login = () => {

//     return (

//     );
// }

// export default Login;