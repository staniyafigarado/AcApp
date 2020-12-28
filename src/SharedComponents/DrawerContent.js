// import React from 'react';
// import { View, StyleSheet, Dimensions, Text } from 'react-native';
// const { width, height } = Dimensions.get('window');
// import {
//     DrawerContentScrollView,
//     DrawerItem
// } from '@react-navigation/drawer';
// export function DrawerContent(props) {
//     return (
//         <View style={{ flex: 1 }}>
//             <DrawerContentScrollView {...props}>
//                 <View>
//                     <DrawerContentModel />
//                     <View style={{ height: height * .7, padding: width * .05, justifyContent: 'space-around' }}>
//                         <Text>gjhkbjnlm</Text>
//                         <ScrollView>
//                             <DrawerItems {...props} />
//                         </ScrollView>
//                     </View>
//                     <View style={{}}>
//                         {/* Bottom view */}
//                     </View>
//                 </View>
//                 <Drawer.Section style={{ height: 100 }}>
//                     <DrawerItem {...props} />
//                 </Drawer.Section>
//             </DrawerContentScrollView>

//         </View>
//     );
// }
import React from 'react';
import { View, StyleSheet, Dimensions, Text, TouchableOpacity, ScrollView } from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
const { width, height } = Dimensions.get('window');
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
const DrawerContent = (props) => {

    return (
        <DrawerContentScrollView {...props}>
            <View
                style={{
                    height: '20%',
                    justifyContent: 'center',
                    padding: width * .05,
                }} >
                <View style={{ height: height * 0.09, flexDirection: 'row', alignItems: 'center' }} >
                    <View style={{ width: '95%' }}>
                        <Text style={{ color: '#000000', fontFamily: 'OpenSans-Bold', fontSize: 21, }}>LOGO</Text>
                    </View>
                    <TouchableOpacity style={{ width: '5%' }}>
                        <IonIcons name='close' size={17} color='#000000' />
                    </TouchableOpacity>
                </View>
            </View>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
}

export default DrawerContent;