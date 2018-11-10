// import React, { Component } from 'react';

// import DateTimePicker from 'react-native-modal-datetime-picker';
// import { TouchableOpacity, } from 'react-native';
// import css from './style'
// export default class AnatomyExample extends Component {

//   state = {
//     isStartDateTimePickerVisible: false,
//     isEndDateTimePickerVisible: false,

//   };

//   _showStartDateTimePicker = () => this.setState({ isStartDateTimePickerVisible: true });

//   _showEndDateTimePicker = () => this.setState({ isEndDateTimePickerVisible: true });

//   hideStartDateTimePicker = () => this.setState({ isStartDateTimePickerVisible: false });

//   hideEndDateTimePicker = () => this.setState({ isEndDateTimePickerVisible: false });
//   // constructor(props) {
//   //   super(props);
//   //   this.handleStartDatePicked = this.handleStartDatePicked.bind(this);
//   //   this.handleEndDatePicked = this.handleEndDatePicked.bind(this);

//   // }
//   handleStartDatePicked = (data) => {
//     this.setState({ chosenDate: data });
//     this.hideStartDateTimePicker();
//   };

//   handleEndDatePicked = (data) => {
//     this.setState({ chosenDate: data });
//     this.hideEndDateTimePicker();
//   };

//   render() {
//     return (
//       <ListItem style={css.viewTime}>
//         <Text style={css.txt}>Start:  </Text>
//         <Left >
//           <TouchableOpacity onPress={this._showStartDateTimePicker}>
//             <Text style={css.txtTime}>{this.state.chosenDate}</Text>
//           </TouchableOpacity>
//           <DateTimePicker
//             mode="time"
//             isVisible={this.state.isStartDateTimePickerVisible}
//             onConfirm={this.handleStartDatePicked}
//             onCancel={this.hideStartDateTimePicker}
//           />
//         </Left>
//         <Text style={css.txt}>End:  </Text>
//         <TouchableOpacity onPress={this._showEndDateTimePicker}>
//           <Text style={css.txtTime}>09:30 AM</Text>
//         </TouchableOpacity>
//         <DateTimePicker
//           mode="time"
//           isVisible={this.state.isEndDateTimePickerVisible}
//           onConfirm={this.handleEndDatePicked}
//           onCancel={this.hideEndDateTimePicker}
//         />
//       </ListItem>

//     );
//   }
// }

import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'
import { View } from 'native-base';
import { Left, Text, ListItem, } from 'native-base';
import css from './style'
export default class MyDatePicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Starttime: '00:00',
      time: '20:00',
    };
  }

  render() {
    return (
      <ListItem style={css.viewTime}>
        <View style={{width: '49.35%'}}>

          <Text note style={css.notetxt}>Start Time</Text>
          <DatePicker
            style={{ width: '100%' }}
            date={this.state.Starttime}
            mode="time"
            format="HH:mm"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            minuteInterval={10}
            onDateChange={(Starttime) => { this.setState({ Starttime: Starttime }); }}
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0
              },
              dateInput: {
                marginLeft: 36,
                borderRadius: 3,
              },

              // ... You can check the source to find the other keys.
            }}
          />
        </View>
        <View style={{width: '49.35%'}}>
          <Text note style={css.notetxt}>End Time</Text>
          <DatePicker
            style={{ width: '100%' }}
            date={this.state.time}
            mode="time"
            format="HH:mm"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            minuteInterval={10}
            onDateChange={(time) => { this.setState({ time: time }); }}
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 5,
                marginLeft: 0
              },
              dateInput: {
                marginLeft: 36,
                borderRadius: 3,

              }
              // ... You can check the source to find the other keys.
            }}

          />
        </View>
      </ListItem>

    )
  }
}