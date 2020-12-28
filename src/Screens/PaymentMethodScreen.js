import React, { useState } from 'react';
import { Text, View, Dimensions, TextInput, Image, FlatList, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Styles from '../Styles/Styles';
import Card from '../SharedComponents/CustomCard';
import CustomHeader from '../SharedComponents/CustomHeader';
import IonIcons from 'react-native-vector-icons/Ionicons';
import Cart from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import RadioButton from '../SharedComponents/CustomRadioButton';
const { width, height } = Dimensions.get('window');
export default class App extends React.Component {
    constructor() {
        super();

        this.state = {
            radioItems:
                [
                    {
                        label: 'Cash On Delivery',
                        size: 20,
                        color: '#0182C3',
                        selected: true
                    },

                    {
                        label: 'UPI Payment',
                        color: '#0182C3',
                        size: 20,
                        selected: false,
                    },

                    {
                        label: 'Debit Card',
                        size: 20,
                        color: '#0182C3',
                        selected: false
                    },
                ], selectedItem: ''
        }
    }

    componentDidMount() {
        this.state.radioItems.map((item) => {
            if (item.selected == true) {
                this.setState({ selectedItem: item.label });
            }
        });
    }

    changeActiveRadioButton(index) {
        this.state.radioItems.map((item) => {
            item.selected = false;
        });

        this.state.radioItems[index].selected = true;

        this.setState({ radioItems: this.state.radioItems }, () => {
            this.setState({ selectedItem: this.state.radioItems[index].label });
        });
    }

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
                <View style={{ width: width * 1 }}>
                    {
                        this.state.radioItems.map((item, key) =>
                            (
                                <RadioButton key={key} button={item} onClick={this.changeActiveRadioButton.bind(this, key)} />
                            ))
                    }
                    <View>
                        {/* <Text style={styles.selectedText}>Selected Item: {this.state.selectedItem}</Text> */}
                    </View>
                </View>
                <View style={{ flex: 2, flexDirection: 'column-reverse' }}>
                    <TouchableOpacity
                        onPress={() => { this.props.navigation.navigate('PaymentSuccessScreen') }}
                        style={{ justifyContent: 'flex-end', backgroundColor: '#F89E44', width: width * 1, height: height * 0.07, alignItems: 'center' }}>
                        <Text style={{ textAlign: 'center', fontFamily: 'Roboto-Medium', fontSize: 18, color: '#FFF', marginBottom: 10 }}>Proceed</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}