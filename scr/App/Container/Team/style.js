import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window');

import {Colors} from '@common'

export default StyleSheet.create({
    txtAdd: {
        color: Colors.txtTitleColor, 
    },
    //Otherteam
    contentst: {
        flex: 1, 
        flexDirection: 'column' 
    },viewst: {
        flex: 1, 
        flexDirection: 'row', 
        alignSelf: 'center' ,
        marginBottom:10
    },btn: {
        margin: 2
    },
    //Team
    cardItem: {
        flex: 1, 
        flexDirection: 'row', 
        height: 0.30 * height
    },Viewfelxone: {
        flex: 1
    },imglogo: {
        width: null, 
        height: '60%', 
        margin: 0, 
        resizeMode: 'contain' 
    },btnEdit: {
        marginTop:  10, 
        alignSelf: 'center', 
        paddingLeft: 14, 
        paddingRight: 14
    },Viewfelxtwo: {
        flex: 2, 
        flexDirection: 'column'
    },txtname: {
        alignSelf: 'center', 
        fontSize: 25, 
        color: Colors.nameTeam,
    },viewlist: {
        flex: 5, 
        flexDirection: 'row', 
        marginTop: 20
    },viewalgnright: {
        flex: 1, 
        marginLeft: 15,
    },txtleave: {
        alignSelf: 'center',
        color: Colors.danger,
        padding: 10,
        margin: 5,
    }
})