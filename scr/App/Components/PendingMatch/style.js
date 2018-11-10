import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window');

import { Colors } from '@common'

export default StyleSheet.create({
    img: {
        height: 95,
        width: 95,
        marginTop: 5,
        marginBottom: 5,
    }, txtTitle: {
        color: Colors.txtTitleColor,
        fontSize: 20,
    },
    txtviewall: {
        color: Colors.viewAll,

    }, txtdate: {
        color: Colors.txtDate
    },cardpadding: {
        paddingBottom: 15,
    },iconst: {
        color: '#fff',
        fontSize: 24,
        marginRight: 10, 
        marginTop: 4,  
    },btnIcon: {
        alignSelf: 'flex-end',  
    }
})