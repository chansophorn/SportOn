import React, { StyleSheet, Dimensions, PixelRatio } from "react-native";
import { Colors } from '@common';


const { width, height, scale } = Dimensions.get("window");

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    }, bannerst: {
        backgroundColor: Colors.bannerAcc,
        height: 0.25 * height, 
        alignItems: 'center',
        flexDirection: 'row',
    }, btntext: {
        color: Colors.txtAcc
    },text: {
        color: Colors.txtwelcome,
        fontSize: 20,
    },viewst: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
       
    },
    //profile
    coverst: {
        height: 0.45*height,
        width: null,  
    },imgprofile: {
        marginTop: 0.35 * height,
        height: 0.18 * height,
        width: 0.18 * height,
        borderRadius: 2,

    },txtUsername: {
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: 'Cochin',
        marginLeft: 0.2 * height,
        marginTop: 0.09 * height,
    },
    description: {
      marginLeft: 0.22 * height,
        fontSize: 15,
    },btnView: {
        flexDirection: 'row',
        // height: 0.055 * height,
        justifyContent: 'space-between',
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        alignItems: 'center',
        
    },vieweachbtn: {
        flex: 1, 
        marginRight: 3
    },frimatch: {      
        borderBottomWidth: 1, 
        width: '50%',  
        alignContent: 'center',
        alignItems: 'center',
        marginBottom: 5,  
        borderBottomColor: '#07e3be',  
        paddingBottom: 5,
    },iconst: {
        color: '#32429A', 
        marginRight: 20,
        fontSize: 28,
    }
});