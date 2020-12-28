import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    TitleText: {
        color: '#0182C3',
        fontSize: 24,
        fontFamily: 'OpenSans-Bold'
    },
    Container: {
        flex: 1, backgroundColor: "#FFFFFF", alignItems: 'center'
    },
    CustomCard: {
        marginTop: height * 0.07, paddingHorizontal: width * .03
    },
    PasswordField: {
        marginTop: height * 0.03, flexDirection: 'row', paddingHorizontal: width * .03
    },
    TextInput: {
        fontFamily: 'Roboto-Regular', fontSize: 14
    },
    HeaderStyle: {
        backgroundColor: '#0182C3', height: '22%', width: '100%'
    },
    SearchStyle: {
        height: height * .07, backgroundColor: '#FFFFFF', marginHorizontal: 15, marginTop: height * .01, borderRadius: 3, justifyContent: 'center', flexDirection: 'row', paddingHorizontal: 10, alignItems: 'center'
    }
})
export default styles