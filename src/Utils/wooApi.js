'use strict';
import WooCommerceAPI from 'react-native-wc-api';
//import WooCommerceAPI from 'react-native-woocommerce-api';


const WooCommerce = new WooCommerceAPI({
    url: 'https://h2bonza.com/docterac/',  //Url
    consumerKey: 'ck_cc59c1623ea218dbc5a09664e089e7637bcc49b5',   //Your Consumer Key
    consumerSecret: 'cs_0cf0229d2f26d9f811fd84dd1693f60e9fdb02b5',  //Your Consumer Secret
    wpAPI: true,
    version: 'wc/v2',
    queryStringAuth: true,
    ssl: true,
});

export default WooCommerce;
