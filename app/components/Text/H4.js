import React from 'react';
import { iOSUIKit } from 'react-native-typography';
import { StyleSheet, Text } from 'react-native';

export default (props) => <Text style={styles.h4}>{props.children}</Text>;

const styles = StyleSheet.create({
  h4: {
    ...iOSUIKit.subheadEmphasized
  }
});
