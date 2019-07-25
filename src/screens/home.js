import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList
} from "react-native";
import { Fab, Icon } from "native-base";
import { connect } from "react-redux";
//import { SwipeListView } from "react-native-swipe-list-view";
import Swipeable from "react-native-swipeable";
import { removeTodo, toggleTodo } from "../actions";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  _renderItem = ({ item }) => (
    <Swipeable
      rightButtons={[
        <TouchableOpacity
          style={[styles.rightSwipeItem, { backgroundColor: "orange" }]}
          onPress={() => this.props.navigation.navigate('EditTodo', {item: item})}
        >
          <Text style={{color: '#fff'}}>Edit</Text>
        </TouchableOpacity>,
        <TouchableOpacity onPress={() => {
          //console.log('here is the item:', item.id);
          //console.log(this.state.todos)
          this.props.removeTodo(item.id);
        }}
          style={[styles.rightSwipeItem, { backgroundColor: "red" }]}
        >
          <Text style={{color: '#fff'}}>Delete</Text>
        </TouchableOpacity>
      ]}
      swipeStartMinRightEdgeClearance={10}
    >
      <TouchableOpacity
        style={styles.row}
        onPress={() => this.props.toggleTodo(item.id)}
      >
        <Text style={item.done ? [styles.todoTitle, {textDecorationLine: 'line-through', textDecorationStyle: 'solid'}] : styles.todoTitle }>{item.task}</Text>
        <Text>{item.dateTime}</Text>
      </TouchableOpacity>
    </Swipeable>
  );
  render() {
    //console.log(this.state);
    return (
      <View style={{ flex: 1 }}>
        {/* {this.props.todo.todos.map((value, index) => {
          return (
            <TouchableOpacity key={index} style={styles.row}>
              <Text>{value.task}</Text>
            </TouchableOpacity>
          );
        })} */}

        <FlatList data={this.props.todo.todos} renderItem={this._renderItem}/>

        {/* <SwipeListView
          data={this.props.todo.todos}
          renderItem={(data, rowMap) => (
            <View style={styles.rowFront} key={data.index}>
              <Text>{data.item.task}</Text>
            </View>
          )}
          renderHiddenItem={(data, rowMap) => (
            <View style={styles.rowBack}>
              <Text>Left</Text>
              <TouchableOpacity style={styles.deleteBtn}
                onPress={ _ => this.props.removeTodo(data.item)}>
                <Text style={{ color: "#fff" }}>Delete</Text>
              </TouchableOpacity>
            </View>
          )}
          leftOpenValue={75}
          rightOpenValue={-75}
          disableRightSwipe={true}
        /> */}

        <Fab
          position="bottomRight"
          onPress={() => this.props.navigation.navigate("Todo")}
        >
          <Icon name="ios-add" />
        </Fab>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: "center",
    height: 90,
    padding: 16
  },
  deleteBtn: {
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red"
  },
  rightSwipeItem: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 20
  },
  todoTitle: {
    fontWeight: "bold",
    fontSize: 25
  }
});

const mapStateToProps = state => ({
  todo: state.todo
});

export default connect(
  mapStateToProps,
  { removeTodo, toggleTodo }
)(Home);
