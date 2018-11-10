import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    Container: {
        height: 0.35 * height,
    }, viewrow: {
        flexDirection: 'row',
        alignSelf: 'center',

    }, btnalignright: {
        margin: 25,
    }, imgBannerDetail: {
        height: '100%',
        width: '100%'
    }
    ,
    // search
    btn:{
        margin: 20,
        borderRadius: 8,
    }
})