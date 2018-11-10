import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window');

import { Colors } from '@common'

export default StyleSheet.create({
    img: {
        resizeMode:'contain'
    }, 
})