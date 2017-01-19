import React, { Component } from 'react';
import { Text, View, TouchableHighlight, StyleSheet } from 'react-native';

class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var tertiary = ['Cancel'];
    var secondary = ['Capture'];
    var primary = ['Camera'];
    if (tertiary.indexOf(this.props.label) !== -1) {
      return (
        <View style={styles.button}>
          <TouchableHighlight
            underlayColor='#dddddd'
            onPress={ this.props.onPress }
            style={ styles.tertiary }>
            <Text style={ styles.tertiaryText }>{ this.props.label }</Text>
          </TouchableHighlight>
        </View>
      )
    } else if (secondary.indexOf(this.props.label) !== -1) {
      return (
        <View style={styles.button}>
          <TouchableHighlight
            underlayColor='#FF9D81'
            onPress={ this.props.onPress }
            style={ styles.secondary }>
            <Text style={ styles.secondaryText }>{ this.props.label }</Text>
          </TouchableHighlight>
        </View>
      )
    } else {
      return (
        <View style={styles.button}>
          <TouchableHighlight
            underlayColor='transparent'
            onPress={ this.props.onPress }
            style={ styles.primary }>
            <Text style={ styles.primaryText }>{ this.props.label }</Text>
          </TouchableHighlight>
        </View>
      )
    }
  }
};

var styles = StyleSheet.create({
  primary: {
    flex: 1,
    height: 40,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#FF3F4E',
    backgroundColor: '#FF3F4E'
  },
  secondary: {
    flex: 1,
    height: 40,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#FF3F4E',
    backgroundColor: 'transparent'
  },
  tertiary: {
    flex: 1,
    height: 40,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#aaaaaa',
    backgroundColor: 'transparent'
  },
  button: {
    height: 40,
    alignItems: 'center',
  },
  primaryText: {
    color: 'white'
  },
  secondaryText: {
    color: '#FF3F4E'
  },
  tertiaryText: {
    color: '#484848'
  }
});

export default Button;
