import React, { useState } from 'react';
import { Text, View, Dimensions, TextInput, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import Styles from '../Styles/Styles';
import Card from '../SharedComponents/CustomCard';
import CustomHeader from '../SharedComponents/CustomHeader';
import IonIcons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Cart from 'react-native-vector-icons/Feather';
import Menu from 'react-native-vector-icons/MaterialIcons';
const { width, height } = Dimensions.get('window');
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showStates: false,
            countriesList: [
                { name: 'Dual Comprasor', isSelected: false },
            ],
            selectedState: '',
            showCountries: false,
            statesList: [
                { name: '1 Ton', isSelected: false },
            ],
            selectedCountry: '',
        };
    }
    toggleStatesList = () => this.setState({ showStates: !this.state.showStates });

    toggleCountrieList = () =>
        this.setState({ showCountries: !this.state.showCountries });

    handleChooseState = (index) => {
        let statesList = [...this.state.statesList];
        statesList[index].isSelected = true;
        statesList.forEach((item, indx) => {
            if (index !== indx) {
                item.isSelected = false;
            }
            return item;
        });

        this.setState({
            statesList,
            selectedState: statesList[index].name,
            showStates: false,
        });
        // this.state.Address.state = statesList[index].name;
    };
    handleChooseCountry = (index) => {
        let countriesList = [...this.state.countriesList];
        countriesList[index].isSelected = true;
        countriesList.forEach((item, indx) => {
            if (index !== indx) {
                item.isSelected = false;
            }
            return item;
        });

        this.setState({
            countriesList,
            selectedCountry: countriesList[index].name,
            showCountries: false,
            //   Address: {
            //     ...this.state.Address,
            //     country: countriesList[index].name,
            //     countryISO: countriesList[index].iso,
            //   },
        });
        // this.state.Address.country = countriesList[index].name;
    };
    render() {
        const {
            isLoading,
            options,
            showStates,
            statesList,
            selectedState,
            countriesList,
            selectedCountry,
            showCountries,
            UserData,
            show, date, mode
        } = this.state;
        return (
            <View style={{ flex: 1, backgroundColor: '#FFF' }}>
                {/* <CustomHeader /> */}
                <View style={[Styles.HeaderStyle, { height: height * .2 }]}>
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
                <View style={{ backgroundColor: '#FFF', borderTopLeftRadius: 20, borderTopRightRadius: 20, height: '100%', top: -height * .07 }}>

                    <ScrollView style={{ width: '100%' }}>
                        <View style={{ alignItems: 'center' }}>
                            <View style={{ flexDirection: 'row', marginVertical: height * .02, alignItems: 'center' }}>
                                <View style={{ width: '87%' }}>
                                    <Text style={{ color: '#000000', fontFamily: 'OpenSans-Bold', fontSize: 21, }}>Address</Text>
                                </View>
                                {/* <View style={{ width: '13%' }}>
                            <Text style={{ color: '#000000', fontFamily: 'Roboto-Light', fontSize: 15 }}>View All</Text>
                        </View> */}
                            </View>
                            <Card style={{ marginTop: height * .02 }}>
                                <TextInput
                                    placeholder={'Name'}
                                    style={Styles.TextInput}
                                ></TextInput>
                            </Card>
                            <Card style={{ marginTop: height * .03 }}>
                                <TextInput
                                    placeholder={'Phone Number'}
                                    keyboardType={'number-pad'}
                                    autoCorrect={false}
                                    style={Styles.TextInput}
                                ></TextInput>
                            </Card>
                            <Card style={{ marginTop: height * .03 }}>
                                <TextInput
                                    placeholder={'Email'}
                                    style={Styles.TextInput}
                                ></TextInput>
                            </Card>
                            <View style={{ alignItems: 'center', marginTop: height * .03 }}>
                                {/* <Card style={{ paddingHorizontal: width * .03, flexDirection: 'row', alignItems: 'center', height: 50 }}>

                                    <Text style={{ width: '87%', color: '#000000', fontFamily: 'OpenSans-SemiBold', fontSize: 12, opacity: 0.5 }}>AC Type</Text>
                                    <TouchableOpacity style={{ width: '13%', padding: 10, alignItems: 'center' }}>
                                        <Icon name='keyboard-arrow-down' size={25} color='#000000' style={{ opacity: .5 }} />
                                    </TouchableOpacity>
                                </Card> */}
                                <CustomInputDropdown
                                    value={selectedCountry}
                                    placeholder="Ac type"
                                    onAction={() => this.toggleCountrieList()}
                                />

                                {showCountries && (
                                    <View
                                        style={{
                                            maxHeight: 200,
                                            borderColor: '#E9E9E9',
                                            borderWidth: 1.5,
                                            borderRadius: 12, width: width * .9,
                                        }}>
                                        <ScrollView nestedScrollEnabled={true}>
                                            {countriesList &&
                                                countriesList.length &&
                                                countriesList.map((list, index) => {
                                                    return (
                                                        <TouchableOpacity
                                                            key={index}
                                                            onPress={() => this.handleChooseCountry(index)}
                                                            style={{
                                                                paddingVertical: 15,
                                                                flexDirection: 'row',
                                                            }}>
                                                            <View
                                                                style={
                                                                    list.isSelected
                                                                        ? {
                                                                            paddingVertical: 15,
                                                                            width: 5,
                                                                            backgroundColor: '#FFC000', width: '100%'
                                                                        }
                                                                        : {}
                                                                }
                                                            />
                                                            <Text
                                                                style={[
                                                                    list.isSelected ? <Text style={{ width: '87%', color: '#000000', fontFamily: 'OpenSans-SemiBold', fontSize: 12 }}></Text> : <Text style={{ width: '87%', color: '#000000', fontFamily: 'OpenSans-SemiBold', fontSize: 12, opacity: 0.5 }}></Text>,
                                                                    { paddingLeft: 15 },
                                                                ]}>
                                                                {list.name}
                                                            </Text>
                                                        </TouchableOpacity>
                                                    );
                                                })}
                                        </ScrollView>
                                    </View>
                                )}
                            </View>

                            <View style={{ alignItems: 'center', marginTop: height * .03 }}>
                                {/* <Card style={{ paddingHorizontal: width * .03, flexDirection: 'row', alignItems: 'center', height: 50 }}>

                                    <Text style={{ width: '87%', color: '#000000', fontFamily: 'OpenSans-SemiBold', fontSize: 12, opacity: 0.5 }}>Specific Ton</Text>
                                    <TouchableOpacity style={{ width: '13%', padding: 10, alignItems: 'center' }}>
                                        <Icon name='keyboard-arrow-down' size={25} color='#000000' style={{ opacity: .5 }} />
                                    </TouchableOpacity>
                                </Card> */}
                                <CustomInputDropdown
                                    value={selectedState}
                                    placeholder="Choose"
                                    onAction={() => this.toggleStatesList()}
                                />

                                {showStates && (
                                    <View
                                        style={{
                                            maxHeight: 200,
                                            borderColor: '#E9E9E9',
                                            borderWidth: 1.5,
                                            borderRadius: 12, width: width * .9,
                                        }}>
                                        <ScrollView nestedScrollEnabled={true}>
                                            {statesList &&
                                                statesList.length &&
                                                statesList.map((list, index) => {
                                                    return (
                                                        <TouchableOpacity
                                                            key={index}
                                                            onPress={() => this.handleChooseState(index)}
                                                            style={{
                                                                paddingVertical: 15,
                                                                flexDirection: 'row',
                                                                alignItems: 'center'
                                                            }}>
                                                            <View
                                                                style={
                                                                    list.isSelected
                                                                        ? {
                                                                            paddingVertical: 15,
                                                                            width: 5,
                                                                            backgroundColor: '#FFC000',
                                                                        }
                                                                        : {}
                                                                }
                                                            />
                                                            <Text
                                                                style={[
                                                                    list.isSelected ? <Text style={{ width: '87%', color: '#000000', fontFamily: 'OpenSans-SemiBold', fontSize: 12, opacity: 0.5 }}></Text> : <Text style={{ width: '87%', color: '#000000', fontFamily: 'OpenSans-SemiBold', fontSize: 12 }}></Text>,
                                                                    { paddingLeft: 15 },
                                                                ]}>
                                                                {list.name}
                                                            </Text>
                                                        </TouchableOpacity>
                                                    );
                                                })}
                                        </ScrollView>
                                    </View>
                                )}
                            </View>
                            <Card style={{ height: height * .2, marginTop: height * .03 }}>
                                <View style={{ width: '100%', height: height * .2, opacity: .7, marginTop: 10 }}>
                                    <TextInput
                                        placeholder={"Issue"}
                                        returnKeyType='previous'
                                        multiline={true}></TextInput>
                                </View>
                            </Card>
                            <View style={{ alignItems: 'center', marginBottom: height * .2 }}>
                                <Card style={{ marginTop: height * 0.03, height: 50, justifyContent: 'center', flexDirection: "row", alignItems: 'center', backgroundColor: '#F89E44' }}>
                                    <TouchableOpacity
                                        onPress={() => { this.props.navigation.navigate('ServiceSuccessScreen') }}
                                        style={{ width: width * 0.9, height: height * 0.07, justifyContent: 'center' }}>
                                        <Text style={{ textAlign: 'center', fontFamily: 'Roboto-Medium', fontSize: 18, marginLeft: 10, color: '#FFF' }}>Book Now</Text>
                                    </TouchableOpacity>
                                </Card>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        )
    }
}
const CustomInputDropdown = (props) => {
    const { label, value, onAction, placeholder } = props;
    console.log('value', value);
    return (
        <View style={{ alignItems: 'center' }}>
            <Card style={{ paddingHorizontal: width * .03, flexDirection: 'row', alignItems: 'center', height: 50 }}>
                <View style={{}}>
                    {label && (
                        <Text style={CommonStyles.customInputLabel}>{label && label}</Text>
                    )}
                    <TouchableOpacity onPress={() => onAction()} style={{ width: '100%' }}>
                        <View
                            style={{
                                borderRadius: 12,
                                backgroundColor: '#fff',
                                height: 50, flexDirection: 'row', alignItems: 'center'
                            }}>
                            <Text
                                style={{
                                    color: placeholder ? '#8C8C8C' : '#000',
                                    fontSize: 12,
                                    fontFamily: 'OpenSans-SemiBold',
                                    textAlignVertical: 'center', width: '93%'
                                }}>
                                {value === '' && placeholder
                                    ? placeholder
                                    : value === ''
                                        ? 'Country'
                                        : value}
                            </Text>
                            <Icon name='keyboard-arrow-down' size={25} color='#000000' style={{ opacity: .5 }} />
                        </View>

                    </TouchableOpacity>
                </View>
            </Card>
        </View>

    );
};
