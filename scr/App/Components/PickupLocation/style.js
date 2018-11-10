import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window');

import { Colors } from '@common'

export default StyleSheet.create({
    listItem:{ 
        paddingBottom: 25, 
        paddingTop: 25 ,
    },txt: { 
        fontSize: 20 
    },
    //Date
    txtDate: {
        marginRight: 45, 
        fontSize: 20 
    },viewTime:{ 
        paddingBottom: 30, 
        paddingTop: 40 ,
       
    },txtTime: {
        color: 'green'
    },notetxt: {
        marginBottom: 10,
        fontSize: 15,
        marginLeft: 40,
    }




})