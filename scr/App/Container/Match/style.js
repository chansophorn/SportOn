import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window');

import { Colors } from '@common'

export default StyleSheet.create({
    Cardst: {
        borderRadius: 20
    }, CardItemst: {
        flex: 1,
        flexDirection: 'row'
    }, viewclom: {
        flex: 3,
        flexDirection: 'column',
        alignItems: 'center'

    }, img: {
        resizeMode: 'contain'
    }, viewVs: {
        flex: 2,
        flexDirection: 'column',
        alignItems: 'center'
    }, txtVs: {
        color: Colors.txtDate,
        fontSize: 30,
        marginTop: 30
    },
    //DetailMatch
    viewdetail: {
        flex: 1,
        height: 0.315 * height,
        flexDirection: 'row'
    }, imgBannerDetail: {
        width: '100%',
        height: '100%',
    }, viewcontent: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 10,
        margin: 10,
    }, txtTitle: {
        color: '#eaac04',
        fontSize: 28
    }, viewbtn: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20
    }, viewbtnflex: {
        flex: 1,
    }, txtmore: {
        color: '#053eb1',
    }, btnjoin: {
        backgroundColor: '#108275',
        alignSelf: 'flex-end',
    }, btninvite: {
        backgroundColor: '#f3ac08',
        alignSelf: 'center',
    }, btnchat: {
        backgroundColor: '#108275',
    }, viewDate: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
        margin: 15
    },txtDate: {
         color: '#108275', 
         marginRight: 10,
    },viewMap: {
         height: 0.26 * height,  
    },viewbottom: { 
        flex: 1, 
        flexDirection: 'row', 
        alignItems: 'center', 
        marginTop: 20, 
        marginBottom: 20, 
        margin:15
    },viewCreateBy: {
        flex: 1,
        flexDirection: 'row', 
        alignItems: 'center', 
        marginTop: 10 
    },Thumbail:{ 
        alignSelf: 'center', 
        marginRight: 20
     
    },btnmember:{ 
        backgroundColor: '#108275', 
        alignSelf: 'flex-end', 
        marginTop:10 
    }




})