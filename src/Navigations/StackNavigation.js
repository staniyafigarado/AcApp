import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {
    createStackNavigator,
    CardStyleInterpolators,
} from '@react-navigation/stack';
import { Text, View, Dimensions, TextInput, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
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
import {
    createDrawerNavigator, DrawerContentScrollView,
    DrawerItemList, DrawerItem
} from "@react-navigation/drawer";
import DrawerContent from '../SharedComponents/DrawerContent';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const { width, height } = Dimensions.get('window');
const MyStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{ headerShown: false, animationEnabled: false }}
            />
            <Stack.Screen
                name="ServiceBookingScreen"
                component={ServiceBookingScreen}
                options={{ headerShown: false, animationEnabled: false }}
            />
            <Stack.Screen
                name="ShopScreen"
                component={ShopScreen}
                options={{ headerShown: false, animationEnabled: false }}
            />
        </Stack.Navigator>
    );
}
const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
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
            }}
        >
            <Tab.Screen name="Home" component={MyStack}
                options={{
                    tabBarLabel: ({ focused }) => (
                        focused
                            ? <Text>Home</Text>
                            : null
                    ),
                    tabBarIcon: ({ focused }) => (
                        focused
                            ? <Icon name='heart' size={30} color='#0182C3' />
                            : <Icon name='heart' size={30} color='#101010' style={{ opacity: .5 }} />
                    ),
                }}
            />
            <Tab.Screen name="Shop" component={ShopScreen}
                options={{
                    tabBarLabel: ({ focused }) => (
                        focused
                            ? <Text>Shop</Text>
                            : null
                    ),
                    tabBarIcon: ({ focused }) => (
                        focused
                            ? <Icon name='shop' size={30} color='#0182C3' />
                            : <Icon name='shop' size={30} color='#101010' style={{ opacity: .5 }} />
                    ),
                }}
            />
            <Tab.Screen name="settings" component={ServiceBookingScreen}
                options={{
                    tabBarLabel: ({ focused }) => (
                        focused
                            ? <Text>Shop</Text>
                            : null
                    ),
                    tabBarIcon: ({ focused }) => (
                        focused
                            ? <IonIcons name='settings-sharp' size={30} color='#0182C3' />
                            : <IonIcons name='settings-sharp' size={30} color='#101010' style={{ opacity: .5 }} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};
const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            // drawerContent={DrawerContent}
            drawerContent={(props) => <DrawerContent {...props} />}
            drawerContentOptions={{
                activeTintColor: '#000000',
                inactiveTintColor: '#000000',
                labelStyle: {
                    fontFamily: 'OpenSans-Regular',
                    fontSize: 16, fontWeight: 'normal'
                },
            }}>
            <Drawer.Screen name="Home" component={BottomTabNavigator}
                options={{
                    drawerIcon: () => (
                        <Icon name='home' size={25} color='#0182C3' />
                    )
                }}
            />
            <Drawer.Screen name="Shop" component={ShopScreen}
                options={{
                    drawerIcon: () => (
                        <Icon name='shop' size={25} color='#0182C3' />
                    )
                }} />
            <Drawer.Screen name="Service" component={ServiceBookingScreen}
                options={{
                    drawerIcon: () => (
                        <IonIcons name='settings-sharp' size={25} color='#0182C3' />
                    )
                }} />
            <Drawer.Screen name="Account" component={MyAccountScreen}
                options={{
                    drawerIcon: () => (
                        <FontAwesome name='user-circle' size={22} color='#0182C3' />
                    )
                }} />
            <Drawer.Screen name="Whishlist" component={WhishlistScreen}
                options={{
                    drawerIcon: () => (
                        <FontAwesome name='heart' size={22} color='#0182C3' />
                    )
                }} />
            <Drawer.Screen name="Logout" component={LoginScreen}
                options={{
                    drawerIcon: () => (
                        <IonIcons name='exit' size={25} color='#0182C3' />
                    )
                }} />
        </Drawer.Navigator>
    );
}

const MainNavigation = (props) => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    gestureEnabled: true,
                    gestureDirection: 'horizontal',
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                }}
                initialRouteName="SplashScreen">
                <Stack.Screen
                    name="SplashScreen"
                    component={SplashScreen}
                    options={{ headerShown: false, animationEnabled: false }}
                />
                <Stack.Screen
                    name="LoginScreen"
                    component={LoginScreen}
                    options={{ headerShown: false, animationEnabled: false }}
                />
                <Stack.Screen
                    name="RegistrationScreen"
                    component={RegistrationScreen}
                    options={{ headerShown: false, animationEnabled: false }}
                />
                <Stack.Screen
                    name="SignInScreen"
                    component={SignInScreen}
                    options={{ headerShown: false, animationEnabled: false }}
                />
                <Stack.Screen
                    name="Forgot"
                    component={Forgot}
                    options={{ headerShown: false, animationEnabled: false }}
                />
                <Stack.Screen
                    name="ForgotPasswordScreen"
                    component={ForgotPasswordScreen}
                    options={{ headerShown: false, animationEnabled: false }}
                />
                <Stack.Screen
                    name="HomeScreen"
                    component={DrawerNavigator}
                    options={{ headerShown: false, animationEnabled: false }}
                />
                <Stack.Screen
                    name="ServiceBookingScreen"
                    component={ServiceBookingScreen}
                    options={{ headerShown: false, animationEnabled: false }}
                />
                <Stack.Screen
                    name="ShopScreen"
                    component={ShopScreen}
                    options={{ headerShown: false, animationEnabled: false }}
                />
                <Stack.Screen
                    name="MyAccountScreen"
                    component={MyAccountScreen}
                    options={{ headerShown: false, animationEnabled: false }}
                />
                <Stack.Screen
                    name="WhishlistScreen"
                    component={WhishlistScreen}
                    options={{ headerShown: false, animationEnabled: false }}
                />
                <Stack.Screen
                    name="EditAccountScreen"
                    component={EditAccountScreen}
                    options={{ headerShown: false, animationEnabled: false }}
                />
                <Stack.Screen
                    name="ProductDetailScreen"
                    component={ProductDetailScreen}
                    options={{ headerShown: false, animationEnabled: false }}
                />
                <Stack.Screen
                    name="ShippingAddressScreen"
                    component={ShippingAddressScreen}
                    options={{ headerShown: false, animationEnabled: false }}
                />
                <Stack.Screen
                    name="PaymentSuccessScreen"
                    component={PaymentSuccessScreen}
                    options={{ headerShown: false, animationEnabled: false }}
                />
                <Stack.Screen
                    name="CartScreen"
                    component={CartScreen}
                    options={{ headerShown: false, animationEnabled: false }}
                />
                <Stack.Screen
                    name="CartConfirmScreen"
                    component={CartConfirmScreen}
                    options={{ headerShown: false, animationEnabled: false }}
                />
                <Stack.Screen
                    name="PaymentMethodScreen"
                    component={PaymentMethodScreen}
                    options={{ headerShown: false, animationEnabled: false }}
                />
                <Stack.Screen
                    name="ServiceAddressScreen"
                    component={ServiceAddressScreen}
                    options={{ headerShown: false, animationEnabled: false }}
                />
                <Stack.Screen
                    name="ServiceSuccessScreen"
                    component={ServiceSuccessScreen}
                    options={{ headerShown: false, animationEnabled: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MainNavigation;
