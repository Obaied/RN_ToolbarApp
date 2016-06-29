'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class ToolbarApp extends Component {
  render() {
    return (
      <View style={styles.toolbar}>
        <Text style={styles.toolbarButton}>Add</Text>
        <Text style={styles.toolbarTitle}>This is the title</Text>
        <Text style={styles.toolbarButton}>Like</Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  toolbar:{
    backgroundColor:  '#81c04d',
    paddingTop:       30,
    paddingBottom:    10,
    flexDirection:    'row'
  },
  toolbarButton:{
    width:      50,
    color:      '#fff',
    textAlign:  'center'
  },
  toolbarTitle:{
    color:       '#fff',
    textAlign:   'center',
    fontWeight:  'bold',
    flex:        1
  }
});

AppRegistry.registerComponent('ToolbarApp', () => ToolbarApp);
