import React, { useState } from 'react';
import Card from '../SharedComponents/CustomCard';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Text, View, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const { width, height } = Dimensions.get('window');
const App = () => {
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    // const showTimepicker = () => {
    //     showMode('time');
    // };
    return (
        <View style={{ alignItems: 'center' }}>
            <Card style={{ paddingHorizontal: width * .03, flexDirection: 'row', alignItems: 'center', height: 50 }}>

                <Text style={{ width: '87%', color: '#000000', fontFamily: 'OpenSans-SemiBold', fontSize: 12, opacity: 0.5 }}>{formatDate(date)}</Text>
                <TouchableOpacity
                    onPress={showDatepicker}
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
                    onChange={onChange}
                    style={{ backgroundColor: 'pink' }}
                />
            )}
        </View>
    );
}
const formatDate = (date) => {
    return `${date.getDate()}/${date.getMonth() +
        1}/${date.getFullYear()}`;
};
export default App;