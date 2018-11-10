import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window');

import { Colors } from '@common'

export default StyleSheet.create({
    img: {
        height: 95,
        width: 95,
    }, txtTitle: {
        color: Colors.txtTitleColor,
        fontSize: 20,
    },
    txtviewall: {
        color: Colors.viewAll,

    }, viewcolum: {
        flexDirection: 'column',
        marginRight: 5,
    }, cardpadding: {
        paddingBottom: 15,
    }, iconst: {
        color: '#fff',
        fontSize: 24,
        marginRight: 10, 
        marginTop: 4,  
    },btnIcon: {
        alignSelf: 'flex-end',  
    }
})