import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { Text, View, Dimensions, TextInput, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import IonIcons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// Custom Screens
import SplashScreen from '../Screens/SplashScreen';
import LoginScreen from '../Screens/LoginScreen';
import RegistrationScreen from '../Screens/RegistrationScreen';
import SignInScreen from '../Screens/SignInScreen';
import Forgot from '../Screens/ForgotEmail';
import ForgotPasswordScreen from '../Screens/ForgotPasswordScreen';
import HomeScreen from '../Screens/HomeScreen';
import ShopScreen from '../Screens/ShopScreen';
import ServiceBookingScreen from '../Screens/ServiceBookingScreen';
import MyAccountScreen from '../Screens/MyAccountScreen';
import WhishlistScreen from '../Screens/WhishlistScreen';
import EditAccountScreen from '../Screens/EditAccountScreen';
import ProductDetailScreen from '../Screens/ProductDetailScreen';
import ShippingAddressScreen from '../Screens/ShippingAddressScreen';
import PaymentSuccessScreen from '../Screens/PaymentSuccessScreen';
import CartScreen from '../Screens/CartScreen';
import CartConfirmScreen from '../Screens/CartConfirmScreen';
import PaymentMethodScreen from '../Screens/PaymentMethodScreen';
import ServiceAddressScreen from '../Screens/ServiceAddressScreen';
import ServiceSuccessScreen from '../Screens/ServiceSuccessScreen';
const { width, height } = Dimensions.get('window');
import { createAppContainer, StackActions, NavigationActions } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation-tabs';
const DrawerContent = (props) => (
    <View style={{ height: '100%' }}>
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
        <View style={{ height: '65%' }}>
            <ScrollView>
                <DrawerItems {...props} />
            </ScrollView>

        </View>
    </View>
)
const StackNav = createStackNavigator({


    HomeScreen: { screen: HomeScreen },
    ShopScreen: { screen: ShopScreen },
    ServiceBookingScreen: { screen: ServiceBookingScreen },
},
    { headerMode: 'none' }
);

const TabNavigator = createBottomTabNavigator(
    {

        Home: {
            screen: HomeScreen,
            navigationOptions: {
                tabBarLabel: ({ focused }) => (
                    focused
                        ? <Text style={{ textAlign: 'center', fontFamily: 'Roboto-Regular' }}>Home</Text>
                        : null
                ),
                tabBarIcon: ({ focused }) => (
                    focused
                        ? <Icon name='heart' size={30} color='#0182C3' />
                        : <Icon name='heart' size={30} color='#101010' style={{ opacity: .5 }} />
                )
            },
        },
        Shop: {
            screen: StackNav,
            navigationOptions: {
                tabBarLabel: ({ focused }) => (
                    focused
                        ? <Text style={{ textAlign: 'center', fontFamily: 'Roboto-Regular' }}>Shop</Text>
                        : null
                ),
                tabBarIcon: ({ focused }) => (
                    focused
                        ? <Icon name='shop' size={30} color='#0182C3' />
                        : <Icon name='shop' size={30} color='#101010' style={{ opacity: .5 }} />
                )
            },
        },
        Service: {
            screen: ServiceBookingScreen,
            navigationOptions: {
                tabBarLabel: ({ focused }) => (
                    focused
                        ? <Text style={{ textAlign: 'center', fontFamily: 'Roboto-Regular' }}>Service</Text>
                        : null
                ),
                // tabBarIcon:
                //     <Icon name='home' size={30} type='material-community' color='#FDC500' />,
                tabBarIcon: ({ focused }) => (
                    focused
                        ? <IonIcons name='settings-sharp' size={30} color='#0182C3' />
                        : <IonIcons name='settings-sharp' size={30} color='#101010' style={{ opacity: .5 }} />
                )
            },
        },
    },

    {
        initialRouteName: 'Home',
        tabBarOptions: {
            activeTintColor: '#101010',
            showLabel: true,
            labelStyle: {
                fontSize: 14, fontFamily: "Roboto-Regular"
            },
            style: {
                // backgroundColor: 'rgba(0,0,0,0.7)',
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                height: height * 0.08,
                position: 'absolute',
                backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center'
            },
        }
    }
);
const MyDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: TabNavigator,
        navigationOptions: {
            title: `Home`,
            drawerLabel: "Home",
            drawerIcon: () => (
                <Icon name='home' size={25} color='#0182C3' />

            )
        },
    },
    Shop: {
        screen: ShopScreen,
        navigationOptions: {
            drawerLabel: "Shop",
            drawerIcon: () => (
                <Icon name='shop' size={25} color='#0182C3' />
            )
        },
    },
    Service: {
        screen: ServiceBookingScreen,
        navigationOptions: {
            drawerLabel: "Service",
            drawerIcon: () => (
                <IonIcons name='settings-sharp' size={25} color='#0182C3' />
            )
        },
    },
    Account: {
        screen: MyAccountScreen,
        navigationOptions: {
            drawerLabel: "My Account",
            drawerIcon: () => (
                <FontAwesome name='user-circle' size={22} color='#0182C3' />
            )
        },
    },
    Whishlist: {
        screen: WhishlistScreen,
        navigationOptions: {
            drawerLabel: "Whishlist",
            drawerIcon: () => (
                <FontAwesome name='heart' size={22} color='#0182C3' />
            )
        },
    },
    Logout: {
        screen: LoginScreen,
        navigationOptions: {
            drawerLabel: "Logout",
            drawerIcon: () => (
                <IonIcons name='exit' size={25} color='#0182C3' />
            )
        },
    },

},
    {
        contentComponent: DrawerContent,
        drawerPosition: 'left',
        drawerWidth: width * .8,
        initialRouteName: 'Home',
        contentOptions: {
            activeTintColor: '#000000',
            inactiveTintColor: '#000000',
            labelStyle: {
                fontFamily: 'OpenSans-Regular',
                fontSize: 16, fontWeight: 'normal'
            },
        },

        drawerBackgroundColor: 'rgba(255,255,255,1)',
    })
const MainNavigator = createStackNavigator({
    SplashScreen: { screen: SplashScreen, headerShown: false },
    LoginScreen: { screen: LoginScreen },
    RegistrationScreen: { screen: RegistrationScreen },
    SignInScreen: { screen: SignInScreen },
    Forgot: { screen: Forgot },
    ForgotPasswordScreen: { screen: ForgotPasswordScreen },
    HomeScreen: { screen: MyDrawerNavigator },
    ShopScreen: { screen: ShopScreen },
    ServiceBookingScreen: { screen: ServiceBookingScreen },
    EditAccountScreen: { screen: EditAccountScreen },
    ProductDetailScreen: { screen: ProductDetailScreen },
    ShippingAddressScreen: { screen: ShippingAddressScreen },
    PaymentSuccessScreen: { screen: PaymentSuccessScreen },
    CartScreen: { screen: CartScreen },
    CartConfirmScreen: { screen: CartConfirmScreen },
    PaymentMethodScreen: { screen: PaymentMethodScreen },
    ServiceAddressScreen: { screen: ServiceAddressScreen },
    ServiceSuccessScreen: { screen: ServiceSuccessScreen },
    MyAccountScreen: { screen: MyAccountScreen }
},
    { headerMode: 'none' }
);

const App1 = createAppContainer(MainNavigator);

export default App1;