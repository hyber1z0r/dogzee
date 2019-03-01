import React from 'react';
import { View, Text } from 'react-native';

export default class MyDogsCarousel extends React.Component {
  render() {
    return (
      <View>
        {this.props.dogs.map((dog) => (
          <View key={dog.id}>
            <Text>{dog.fullName}</Text>
            <Text>{dog.sex}</Text>
            <Text>{dog.birthday.toDateString()}</Text>
          </View>
        ))}
      </View>
    );
  }
}
