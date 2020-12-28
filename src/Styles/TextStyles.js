import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    TitleText: {
        color: '#0182C3',
        fontSize: 24,
        fontFamily: 'OpenSans-Bold'
    },
    OrText: {
        textAlign: 'center', fontFamily: 'Roboto-Regular',
        fontSize: 14, marginTop: height * 0.015, color: '#000000', opacity: 0.5
    },
    RR14: {
        fontFamily: 'Roboto-Regular', fontSize: 14, color: '#101010'
    }
})
export default styles