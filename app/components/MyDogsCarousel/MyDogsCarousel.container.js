import React from 'react';
import MyDogsCarousel from './MyDogsCarousel';

export default class MyDogsCarouselContainer extends React.Component {
  state = {
    dogs: [
      {
        id: 1,
        fullName: 'Uno-Spitz\'s Dollars Donder',
        birthday: new Date(2017, 12, 23),
        sex: 'male'
      }
    ]
  };

  render() {
    return <MyDogsCarousel dogs={this.state.dogs}/>;
  }
}
