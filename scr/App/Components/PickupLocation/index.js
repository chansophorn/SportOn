import React, { Component } from 'react';
import {  Icon, Text , Form,  Picker, ListItem,  } from 'native-base';
import css from './style'
export default class AnatomyExample extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selected: "key1",
    };
  }
  onValueChange(value) {
    this.setState({
      selected: value
    });
  }

  render() {
    return (   
      
          <Form>
            <ListItem style={css.listItem}>
              <Text style={css.txt}>Location:   </Text>
              <Picker
                mode="dropdown"
                iosHeader="Select your SIM"
                iosIcon={<Icon name="ios-arrow-down-outline" />}
                style={{ width: undefined,color: 'green' }}
                selectedValue={this.state.selected}
                onValueChange={this.onValueChange.bind(this)}
              >
                <Picker.Item label="Toul Kork" value="key0" />
                <Picker.Item label="Steng Mean Jey" value="key1" />
                <Picker.Item label="Somnong 12" value="key2" />
                <Picker.Item label="PhnomPenh Tmey" value="key3" />
                <Picker.Item label="Sen Sok" value="key4" />
              </Picker>
            </ListItem>
          </Form>
      
    );
  }
}