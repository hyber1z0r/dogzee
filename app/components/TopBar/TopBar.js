import React from 'react';
import { View, StyleSheet } from 'react-native';
import { iOSColors } from 'react-native-typography'
import H1 from '../Text/H1';

export default class TopBar extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <H1>{this.props.children}</H1>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: iOSColors.white,
    height: 96,
    display: 'flex',
    justifyContent: 'flex-end',
    padding: 16
  }
});
