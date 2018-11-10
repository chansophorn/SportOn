// import React, { Component } from 'react';

// export default class AnatomyExample extends Component {

//   constructor(props) {
//     super(props);
//     this.setDate = this.setDate.bind(this);

//   }
//   setDate(newDate) {
//     this.setState({ chosenDate: newDate });
//   }
//   render() { 
//     return (
//           
//             <Text style={css.txtDate}>
//               {/* Date: {this.state.chosenDate.toString().substr(4, 12)} */}
//               Date:
//             </Text>
//             <DatePicker
//               defaultDate={new Date(2018, 4, 4)}
//               minimumDate={new Date(2018, 1, 1)}
//               maximumDate={new Date(2019, 12, 31)}
//               locale={"en"}
//               timeZoneOffsetInMinutes={undefined}
//               modalTransparent={false}
//               animationType={"fade"}
//               androidMode={"default"}
//               placeHolderText="Select date"
//               textStyle={{ color: "green" }}
//               placeHolderTextStyle={{ color: "green" }}
//               onDateChange={this.setDate}
//             />
//           </ListItem>
//     );
//   }
// }

import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'
import { ListItem, Text, View } from 'native-base';
import css from './style'
export default class MyDatePicker extends Component {
  constructor(props) {
    super(props)
    this.state = { date: "2016-05-15" }
  }

  render() {
    return (
      <View>
        

        <ListItem style={css.listItem}>
        <View style={{flexDirection: 'column',width: '100%'}}>

        <Text note style={css.notetxt}>Please chosen Date</Text>

          <DatePicker
            style={{ width: '100%' }}
            date={this.state.date}
            mode="date"
            placeholder="select date"
            format="YYYY-MM-DD"
            minDate="2016-05-01"
            maxDate="2016-06-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0
              },
              dateInput: {
                marginLeft: 36
              }
              // ... You can check the source to find the other keys.
            }}
            onDateChange={(date) => { this.setState({ date: date }) }}
          />
          </View>
        </ListItem>
      </View>
    )
  }
}