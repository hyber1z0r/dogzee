import React from 'react';
import { iOSUIKit } from 'react-native-typography';
import { StyleSheet, Text } from 'react-native';

export default (props) => <Text style={styles.h2}>{props.children}</Text>;

const styles = StyleSheet.create({
  p: {
    ...iOSUIKit.subhead
  }
});
