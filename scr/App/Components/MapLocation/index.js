import React, { Component } from 'react';
import { Container, View, Content } from 'native-base';
import { Image,  } from 'react-native';
import { Images } from '@common'
import css from './style'
export default class SearchBarExample extends Component {

    render() {
 

        return (
            <Container>
                <Content >
                    <View style={css.viewMap}>
                        <Image
                            style={css.imgBannerDetail}
                            source={{ uri: Images.map }}
                        />
                    </View >
                </Content>

            </Container>
        );
    }
}