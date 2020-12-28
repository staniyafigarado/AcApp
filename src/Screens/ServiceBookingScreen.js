import React, { useState } from 'react';
import { Text, View, Dimensions, TextInput, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import Styles from '../Styles/Styles';
const { width, height } = Dimensions.get('window');
import CustomHeader from '../SharedComponents/CustomHeader';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Card from '../SharedComponents/CustomCard';
import Cart from 'react-native-vector-icons/Feather';
import Menu from 'react-native-vector-icons/MaterialIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import DatePicker from '../SharedComponents/CustomDatePicker';

const data = [
    {
        id: 1,
        time: '10:00'
    },
    {
        id: 2,
        time: '11:00'
    },
    {
        id: 3,
        time: '12:00'
    },
    {
        id: 4,
        time: '02:00'
    },
    {
        id: 5,
        time: '03:00'
    },
    {
        id: 6,
        time: '04:00'
    },
    {
        id: 7,
        time: '05:00'
    }
]
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showStates: false,
            countriesList: [
                { name: 'Samsung', isSelected: false },
                { name: 'LG', isSelected: false },
                { name: 'Loid', isSelected: false },
                { name: 'Godrej', isSelected: false },
            ],
            selectedState: '',
            showCountries: false,
            statesList: [
                { name: 'Air Conditioner', isSelected: false },
            ],
            selectedCountry: '',
            date: new Date(1598051730000),
            mode: 'date',
            show: false,
        };
    }
    setDate = (event, selectedDate) => {
        date = date || this.state.date;
        this.setState({
            show: Platform.OS === 'ios' ? true : false,
            date
        })
    };

    show = mode => {
        this.setState({
            show: true,
            mode
        })
    }

    datePicker = () => {
        this.show('date')
    }

    formatDate = () => {

        this.setState({
            format: `${this.state.date.getDate()}/${this.state.date.getMonth() +
                1}/${this.state.date.getFullYear()}`
        })
        // const format = `${this.state.date.getDate()}/${this.state.date.getMonth() +
        //     1}/${this.state.date.getFullYear()}`;
        // return format;

    };

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
            <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
                {/* <CustomHeader style={{ position: 'absolute' }} /> */}
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
                        <View style={{ marginBottom: height * .3 }}>
                            <View style={{ flexDirection: 'row', paddingHorizontal: 15, marginTop: height * .03, alignItems: 'center' }}>
                                <View style={{ width: '95%' }}>
                                    <Text style={{ color: '#000000', fontFamily: 'OpenSans-Bold', fontSize: 21, textAlign: 'center' }}>Book your service</Text>
                                </View>
                                <TouchableOpacity style={{ width: '5%' }}>
                                    <FontAwesome name='close' size={17} color='#000000' />
                                </TouchableOpacity>
                            </View>
                            <Text style={{ color: '#000000', fontFamily: 'OpenSans-SemiBold', fontSize: 16, textAlign: 'left', padding: 17 }}>Pick your brand</Text>
                            {/* <View style={{ alignItems: 'center' }}>
                                <Card style={{ paddingHorizontal: width * .03, flexDirection: 'row', alignItems: 'center', height: 50 }}>

                                    <Text style={{ width: '87%', color: '#000000', fontFamily: 'OpenSans-SemiBold', fontSize: 12, opacity: 0.5 }}>Choose</Text>
                                    <TouchableOpacity style={{ width: '13%', padding: 10, alignItems: 'center' }}>
                                        <Icon name='keyboard-arrow-down' size={25} color='#000000' style={{ opacity: .5 }} />
                                    </TouchableOpacity>
                                </Card>
                            </View> */}
                            <CustomInputDropdown
                                value={selectedCountry}
                                placeholder="Choose"
                                onAction={() => this.toggleCountrieList()}
                            />

                            {showCountries && (
                                <View
                                    style={{
                                        maxHeight: 200,
                                        borderColor: '#E9E9E9',
                                        borderWidth: 1.5,
                                        borderRadius: 12,
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
                                                            alignItems: 'center',
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

                            <Text style={{ color: '#000000', fontFamily: 'OpenSans-SemiBold', fontSize: 16, textAlign: 'left', padding: 17 }}>Pick your product</Text>
                            {/* <View style={{ alignItems: 'center' }}>
                                <Card style={{ paddingHorizontal: width * .03, flexDirection: 'row', alignItems: 'center', height: 50 }}>

                                    {/* <Text style={{ width: '87%', color: '#000000', fontFamily: 'OpenSans-SemiBold', fontSize: 12, opacity: 0.5 }}>Choose</Text>
                                    <TouchableOpacity style={{ width: '13%', padding: 10, alignItems: 'center' }}>
                                        <Icon name='keyboard-arrow-down' size={25} color='#000000' style={{ opacity: .5 }} />
                                    </TouchableOpacity> */}

                            {/* </Card> */}
                            {/* </View> */}
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
                                        borderRadius: 12,
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
                            <Text style={{ color: '#000000', fontFamily: 'OpenSans-SemiBold', fontSize: 16, textAlign: 'left', padding: 17 }}>Date and Time</Text>
                            <Text style={{ color: '#000000', fontFamily: 'Roboto-Regular', fontSize: 12, textAlign: 'left', paddingHorizontal: 17, top: -10 }}>Select Date</Text>
                            {/* <View style={{ alignItems: 'center' }}>
                                <Card style={{ paddingHorizontal: width * .03, flexDirection: 'row', alignItems: 'center', height: 50 }}>

                                    <Text style={{ width: '87%', color: '#000000', fontFamily: 'OpenSans-SemiBold', fontSize: 12, opacity: 0.5 }}>{this.state.date.toDateString()}</Text>
                                    <TouchableOpacity
                                        onPress={this.datePicker}
                                        style={{ width: '13%', padding: 10, alignItems: 'center' }}>
                                        <Icon name='date-range' size={20} color='#000000' style={{ opacity: .5 }} />
                                    </TouchableOpacity>
                                </Card>
                                {show && (
                                    <DateTimePicker
                                        testID="dateTimePicker"
                                        value={date}
                                        mode={mode}
                                        is24Hour={true}
                                        display="default"
                                        forma="(YYYY MM DD)"
                                        onChange={this.setDate}
                                    />
                                )}
                            </View> */}
                            <DatePicker />
                            <Text style={{ color: '#000000', fontFamily: 'Roboto-Regular', fontSize: 12, textAlign: 'left', paddingHorizontal: 17, marginVertical: 10 }}>Select Time</Text>
                            <View style={{ alignItems: 'center', paddingHorizontal: 15 }}>


                                <FlatList
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                    data={data}
                                    renderItem={({ item }) => (
                                        <TouchableOpacity style={{ paddingHorizontal: 7, paddingVertical: 5 }} >
                                            <Card style={{ flexDirection: 'row', alignItems: 'center', height: 50, width: 50, justifyContent: 'center' }}>
                                                <Text style={{ color: '#000000', fontFamily: 'OpenSans-SemiBold', fontSize: 12, opacity: 0.5 }}>{item.time}</Text>
                                            </Card>
                                        </TouchableOpacity>
                                    )}
                                    keyExtractor={item => item.id}
                                // extraData={selected}
                                />
                            </View>
                            <View style={{ alignItems: 'center', paddingBottom: 15 }}>
                                <Card style={{ marginTop: height * 0.03, height: 50, justifyContent: 'center', flexDirection: "row", alignItems: 'center', backgroundColor: '#F89E44' }}>
                                    <TouchableOpacity
                                        onPress={() => { this.props.navigation.navigate('ServiceAddressScreen') }}
                                        style={{ width: width * 0.9, height: height * 0.07, justifyContent: 'center' }}>
                                        <Text style={{ textAlign: 'center', fontFamily: 'Roboto-Medium', fontSize: 18, marginLeft: 10, color: '#FFF' }}>Book Now</Text>
                                    </TouchableOpacity>
                                </Card>
                            </View>
                        </View>
                    </ScrollView>
                </View>


                {/* <ScrollView style={{ marginTop: height * .15, }}>
                <View style={{ backgroundColor: '#FFF', borderTopLeftRadius: 20, borderTopRightRadius: 20, height: '100%' }}>
                    

                </View>
            </ScrollView> */}
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
                                    fontSize: 16,
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

// const formatDate = (date) => {
//     return `${date.getDate()}/${date.getMonth() +
//         1}/${date.getFullYear()}`;
// };

// const App = ({ navigation }) => {
//     const [date, setDate] = useState(new Date(1598051730000));
//     const [mode, setMode] = useState('date');
//     const [show, setShow] = useState(false);

//     const onChange = (event, selectedDate) => {
//         const currentDate = selectedDate || date;
//         setShow(Platform.OS === 'ios');
//         setDate(currentDate);
//     };

//     const showMode = (currentMode) => {
//         setShow(true);
//         setMode(currentMode);
//     };

//     const showDatepicker = () => {
//         showMode('date');
//     };

//     // const showTimepicker = () => {
//     //     showMode('time');
//     // };

//     return (
//         <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
//             {/* <CustomHeader style={{ position: 'absolute' }} /> */}
//             <View style={[Styles.HeaderStyle, { height: height * .2 }]}>
//                 <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center', marginTop: 20 }}>
//                     <View style={{ width: '10%', alignItems: 'center' }}>
//                         <TouchableOpacity
//                             onPress={() => { this.props.navigation.toggleDrawer(); }}
//                         >
//                             <Menu name='menu' size={30} color='#FFFFFF' />
//                         </TouchableOpacity>
//                     </View>
//                     <View style={{ width: '80%', alignItems: 'center' }}>
//                         <Text style={{ fontFamily: 'OpenSans-SemiBold', fontSize: 20, color: '#FFFFFF', }}>LOGO</Text>
//                     </View>
//                     <View style={{ width: '10%', alignItems: 'center' }}>
//                         <TouchableOpacity onPress={() => { this.props.navigation.navigate('CartScreen') }}>
//                             <Cart name='shopping-bag' size={26} color='#FFFFFF' />
//                         </TouchableOpacity>
//                     </View>
//                 </View>
//             </View>
//             <View style={{ backgroundColor: '#FFF', borderTopLeftRadius: 20, borderTopRightRadius: 20, height: '100%', top: -height * .07 }}>
//                 <ScrollView style={{ width: '100%' }}>
//                     <View style={{ marginBottom: height * .3 }}>
//                         <View style={{ flexDirection: 'row', paddingHorizontal: 15, marginTop: height * .03, alignItems: 'center' }}>
//                             <View style={{ width: '95%' }}>
//                                 <Text style={{ color: '#000000', fontFamily: 'OpenSans-Bold', fontSize: 21, textAlign: 'center' }}>Book your service</Text>
//                             </View>
//                             <TouchableOpacity style={{ width: '5%' }}>
//                                 <FontAwesome name='close' size={17} color='#000000' />
//                             </TouchableOpacity>
//                         </View>
//                         <Text style={{ color: '#000000', fontFamily: 'OpenSans-SemiBold', fontSize: 16, textAlign: 'left', padding: 17 }}>Pick your brand</Text>
//                         <View style={{ alignItems: 'center' }}>
//                             <Card style={{ paddingHorizontal: width * .03, flexDirection: 'row', alignItems: 'center', height: 50 }}>

//                                 <Text style={{ width: '87%', color: '#000000', fontFamily: 'OpenSans-SemiBold', fontSize: 12, opacity: 0.5 }}>Choose</Text>
//                                 <TouchableOpacity style={{ width: '13%', padding: 10, alignItems: 'center' }}>
//                                     <Icon name='keyboard-arrow-down' size={25} color='#000000' style={{ opacity: .5 }} />
//                                 </TouchableOpacity>
//                             </Card>
//                         </View>
//                         <Text style={{ color: '#000000', fontFamily: 'OpenSans-SemiBold', fontSize: 16, textAlign: 'left', padding: 17 }}>Pick your product</Text>
//                         <View style={{ alignItems: 'center' }}>
//                             <Card style={{ paddingHorizontal: width * .03, flexDirection: 'row', alignItems: 'center', height: 50 }}>

//                                 <Text style={{ width: '87%', color: '#000000', fontFamily: 'OpenSans-SemiBold', fontSize: 12, opacity: 0.5 }}>Choose</Text>
//                                 <TouchableOpacity style={{ width: '13%', padding: 10, alignItems: 'center' }}>
//                                     <Icon name='keyboard-arrow-down' size={25} color='#000000' style={{ opacity: .5 }} />
//                                 </TouchableOpacity>
//                             </Card>
//                         </View>
//                         <Text style={{ color: '#000000', fontFamily: 'OpenSans-SemiBold', fontSize: 16, textAlign: 'left', padding: 17 }}>Date and Time</Text>
//                         <Text style={{ color: '#000000', fontFamily: 'Roboto-Regular', fontSize: 12, textAlign: 'left', paddingHorizontal: 17, top: -10 }}>Select Date</Text>
//                         <View style={{ alignItems: 'center' }}>
//                             <Card style={{ paddingHorizontal: width * .03, flexDirection: 'row', alignItems: 'center', height: 50 }}>

//                                 <Text style={{ width: '87%', color: '#000000', fontFamily: 'OpenSans-SemiBold', fontSize: 12, opacity: 0.5 }}>{formatDate(date)}</Text>
//                                 <TouchableOpacity
//                                     onPress={showDatepicker}
//                                     style={{ width: '13%', padding: 10, alignItems: 'center' }}>
//                                     <Icon name='date-range' size={20} color='#000000' style={{ opacity: .5 }} />
//                                 </TouchableOpacity>
//                             </Card>
//                             {show && (
//                                 <DateTimePicker
//                                     testID="dateTimePicker"
//                                     value={date}
//                                     mode={mode}
//                                     is24Hour={true}
//                                     display="default"
//                                     onChange={onChange}
//                                     style={{ backgroundColor: 'pink' }}
//                                 />
//                             )}
//                         </View>
//                         <Text style={{ color: '#000000', fontFamily: 'Roboto-Regular', fontSize: 12, textAlign: 'left', paddingHorizontal: 17, marginVertical: 10 }}>Select Time</Text>
//                         <View style={{ alignItems: 'center', paddingHorizontal: 15 }}>


//                             <FlatList
//                                 horizontal
//                                 showsHorizontalScrollIndicator={false}
//                                 data={data}
//                                 renderItem={({ item }) => (
//                                     <TouchableOpacity style={{ paddingHorizontal: 7, paddingVertical: 5 }} >
//                                         <Card style={{ flexDirection: 'row', alignItems: 'center', height: 50, width: 50, justifyContent: 'center' }}>
//                                             <Text style={{ color: '#000000', fontFamily: 'OpenSans-SemiBold', fontSize: 12, opacity: 0.5 }}>{item.time}</Text>
//                                         </Card>
//                                     </TouchableOpacity>
//                                 )}
//                                 keyExtractor={item => item.id}
//                             // extraData={selected}
//                             />
//                         </View>
//                         <View style={{ alignItems: 'center', paddingBottom: 15 }}>
//                             <Card style={{ marginTop: height * 0.03, height: 50, justifyContent: 'center', flexDirection: "row", alignItems: 'center', backgroundColor: '#F89E44' }}>
//                                 <TouchableOpacity
//                                     onPress={() => { navigation.navigate('ServiceAddressScreen') }}
//                                     style={{ width: width * 0.9, height: height * 0.07, justifyContent: 'center' }}>
//                                     <Text style={{ textAlign: 'center', fontFamily: 'Roboto-Medium', fontSize: 18, marginLeft: 10, color: '#FFF' }}>Book Now</Text>
//                                 </TouchableOpacity>
//                             </Card>
//                         </View>
//                     </View>
//                 </ScrollView>
//             </View>


//             {/* <ScrollView style={{ marginTop: height * .15, }}>
//                 <View style={{ backgroundColor: '#FFF', borderTopLeftRadius: 20, borderTopRightRadius: 20, height: '100%' }}>


//                 </View>
//             </ScrollView> */}
//         </View>
//     )
// }
// const formatDate = (date) => {
//     return `${date.getDate()}/${date.getMonth() +
//         1}/${date.getFullYear()}`;
// };
// export default App;