import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import Card from './CustomCard';
import Cart from 'react-native-vector-icons/Feather';


export default class RadioButton extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <TouchableOpacity onPress={this.props.onClick} activeOpacity={0.9} style={styles.radioButton}>
                <Card style={{ width: '100%', flexDirection: 'row', height: 50, alignItems: 'center' }}>
                    <View style={[styles.radioButtonHolder, { height: this.props.button.size, width: this.props.button.size, borderColor: this.props.button.color, marginLeft: 15 }]}>
                        {
                            (this.props.button.selected)
                                ?
                                (<View style={[styles.radioIcon, { height: this.props.button.size / 2, width: this.props.button.size / 2, backgroundColor: this.props.button.color }]}></View>)
                                :
                                null
                        }
                    </View>
                    <Text style={[styles.label, { color: '#000000', fontFamily: 'Roboto-Regular', fontSize: 16 }]}>{this.props.button.label}</Text>
                </Card>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create(
    {

        radioButton:
        {
            flexDirection: 'row',
            margin: 10
        },

        radioButtonHolder:
        {
            borderRadius: 50,
            borderWidth: 2,
            justifyContent: 'center',
            alignItems: 'center'
        },

        radioIcon:
        {
            borderRadius: 50,
        },

        label:
        {
            marginLeft: 10,
            fontSize: 20
        },
        selectedText:
        {
            fontSize: 18,
            color: 'white'
        }
    });