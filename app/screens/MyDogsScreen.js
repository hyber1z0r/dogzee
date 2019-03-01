import React from 'react';
import { Text, View } from 'react-native';
import TopBar from '../components/TopBar/TopBar';
import MyDogsCarousel from '../components/MyDogsCarousel/MyDogsCarousel.container';

export default class MyDogsScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View>
        <TopBar>Mine hunde</TopBar>
        <MyDogsCarousel/>
      </View>
    );
  }

}
