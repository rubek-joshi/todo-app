import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
import { Button } from "native-base";
import { TextField } from "react-native-material-textfield";
import moment from "moment";
import { connect } from "react-redux";
import { addTodo } from "../actions";

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDateTimePickerVisible: false,
      task: "",
      dateTime: ""
    };
  }

  showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  };

  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  };

  handleDatePicked = dateTime => {
    console.log("A date has been picked: ", dateTime);
    this.setState({
      dateTime: moment(dateTime).format("MMMM Do YYYY, h:mm:ss a")
    });
    this.hideDateTimePicker();
  };

  handleAddBtn = () => {
    this.props.addTodo({
      task: this.state.task,
      dateTime: this.state.dateTime,
      done: false
    });
    this.props.navigation.goBack();
  };

  render() {
    return (
      <View style={{ flex: 1, padding: 16 }}>
        <TextField
          label="Enter task"
          value={this.state.task}
          onChangeText={value => this.setState({ task: value })}
        />

        <Button
          transparent
          light
          onPress={this.showDateTimePicker}
          style={{
            borderBottomWidth: StyleSheet.hairlineWidth,
            marginBottom: 16
          }}
        >
          <Text style={{ color: "#000" }}>
            {this.state.dateTime ? this.state.dateTime : "Select Date and Time"}
          </Text>
        </Button>
        <DateTimePicker
          mode="datetime"
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this.handleDatePicked}
          onCancel={this.hideDateTimePicker}
        />
        <Button
          success
          onPress={() => this.handleAddBtn()}
          style={{ justifyContent: "center" }}
        >
          <Text style={{ color: "#fff" }}>Add</Text>
        </Button>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  todo: state.todo
});

export default connect(
  mapStateToProps,
  { addTodo }
)(ToDo);
