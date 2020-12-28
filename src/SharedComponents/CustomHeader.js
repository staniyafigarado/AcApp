import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Menu from 'react-native-vector-icons/MaterialIcons';
import Cart from 'react-native-vector-icons/Feather';
import Styles from '../Styles/Styles';
class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        // const { nav } = this.props;
        // const navigation = useNavigation();
        return (
            <View style={[Styles.HeaderStyle]}>
                <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center', marginTop: 20 }}>
                    <View style={{ width: '10%', alignItems: 'center' }}>
                        <TouchableOpacity
                        // onPress={() => { this.props.navigation.dispatch(DrawerActions.openDrawer()); }}
                        >
                            <Menu name='menu' size={30} color='#FFFFFF' />
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '80%', alignItems: 'center' }}>
                        <Text style={{ fontFamily: 'OpenSans-SemiBold', fontSize: 20, color: '#FFFFFF', }}>LOGO</Text>
                    </View>
                    <View style={{ width: '10%', alignItems: 'center' }}>
                        <TouchableOpacity
                        // onPress={() => this.props.navigation.navigate('HomeScreen')}
                        >
                            <Cart name='shopping-bag' size={26} color='#FFFFFF' />
                        </TouchableOpacity>
                    </View>
                </View>
                {this.props.children}
            </View>
        )
    }
}
export default App;
// const CustomHeader = (props) => {
//     const { height, children } = props
//     // const navigation = useNavigation();
//     const { navigation } = this.props.navigation;
//     return (
//         <View style={[Styles.HeaderStyle, props.style]}>
//             <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center', marginTop: 20 }}>
//                 <View style={{ width: '10%', alignItems: 'center' }}>
//                     <TouchableOpacity
//                     // onPress={() => { this.props.navigation.dispatch(DrawerActions.openDrawer()); }}
//                     >
//                         <Menu name='menu' size={30} color='#FFFFFF' />
//                     </TouchableOpacity>
//                 </View>
//                 <View style={{ width: '80%', alignItems: 'center' }}>
//                     <Text style={{ fontFamily: 'OpenSans-SemiBold', fontSize: 20, color: '#FFFFFF', }}>LOGO</Text>
//                 </View>
//                 <View style={{ width: '10%', alignItems: 'center' }}>
//                     <TouchableOpacity {...props}
//                         onPress={() => navigation.navigate('HomeScreen')}
//                     // onPress={() => navigation.navigate('HomeScreen')}
//                     >
//                         <Cart name='shopping-bag' size={26} color='#FFFFFF' />
//                     </TouchableOpacity>
//                 </View>
//             </View>
//             {children}
//         </View>
//     );
// }
// export default CustomHeader
// export default class App extends React.Component {
//     render() {
//         return (
//             <View style={[Styles.HeaderStyle,props.style]}>
//                 <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center', marginTop: 20 }}>
//                     <Menu name='menu' size={30} color='#FFFFFF' style={{ width: '10%' }} />
//                     <View style={{ width: '80%', alignItems: 'center' }}>
//                         <Text style={{ fontFamily: 'OpenSans-SemiBold', fontSize: 20, color: '#FFFFFF', }}>LOGO</Text>
//                     </View>
//                     <Cart name='shopping-bag' size={26} color='#FFFFFF' style={{ width: '10%' }} />
//                 </View>
//                 {children}
//             </View>
//         );
//     }
// }