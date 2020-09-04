import React, { Component } from 'react';
import { IconButton } from '@chakra-ui/core';
import { Events, animateScroll as scroll } from 'react-scroll';

export default class Up extends Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {
    Events.scrollEvent.register('begin', function () {
      //   console.log('begin', arguments);
    });

    Events.scrollEvent.register('end', function () {
      //   console.log('end', arguments);
    });
  }
  scrollToTop() {
    scroll.scrollToTop();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }
  render() {
    return (
      <div>
        <IconButton
          //   variantColor="yellow"
          aria-label="Call Sage"
          fontSize="20px"
          color="white"
          icon={'arrow-up'}
          onClick={this.scrollToTop}
          style={{
            backgroundColor: 'black',
            position: 'fixed',
            bottom: 30,
            right: 50,
            zIndex: 999,
          }}
        ></IconButton>
      </div>
    );
  }
}
