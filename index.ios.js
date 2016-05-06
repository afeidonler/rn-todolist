/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Alert,
  View
} from 'react-native';
const arrLen = 9
class todolist extends Component {
  constructor(props, context) {
    super(props, context);
    let item = Math.floor(Math.random()*arrLen);
    this.state = {text: "react-native",arr:arrLen,arrItem:[],arrStatus:[],item:item};
  }
  changeHandle(text) {
    this.setState({text})
  }
  clickHandleIn(i){
    return e =>{
      let arrStatus = this.state.arrItem;
      arrStatus[i]= true;
      console.warn(i);
      this.setState({arrStatus})
    }
    
  }
  clickHandleOut(i){
    return e =>{
      
      let {arrStatus,arrItem,item} = this.state;
      if(item ===parseInt(i)) {
         Alert.alert(
          '恭喜',
          '您找到了宝藏',
        )
         let item = Math.floor(Math.random()*arrLen);
         arrItem=[]
         this.setState({item})
      }
      else {
        arrItem[i]= true;
      }
      arrStatus[i]= false;
      this.setState({arrStatus,arrItem})
    }
    
  }
  getTable() {
    let arr = this.state.arr;
    let arrEles = []
    for (let i= 0; i <9; i++) {
      arrEles.push( (
        <TouchableWithoutFeedback
          onPressIn={this.clickHandleIn(i)}
          onPressOut={this.clickHandleOut(i)}
          disabled={this.state.arrItem[i]}
          key={i}
        >
          <View style={[styles.table,this.state.arrItem[i]&&styles.disabled,this.state.arrStatus[i]&&styles.active]}>
            <Text>
              {i+1}
            </Text>
          </View>
        </TouchableWithoutFeedback>))
    }
    return arrEles;
  }
  render() {
    return (
      <View style={styles.container}>
      {this.getTable()}
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={this.changeHandle.bind(this)}
        value={this.state.text}
      />
        <Text style={styles.welcome}>
          {this.state.text}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  table:{
    height:50
  },
  active:{
    backgroundColor: '#C7EDCC'
  },
  disabled: {
    backgroundColor: '#ccc'
  }
});

AppRegistry.registerComponent('todolist', () => todolist);
