import React, { Component } from 'react';
import Parallax from 'react-springy-parallax';
import parallax1 from '../assets/static/asia-2181888_1920.jpg';
import parallax2 from '../assets/static/navigation-1048294_1920.jpg';
import parallax3 from '../assets/static/city-3126072_1920.jpg';

class Home extends Component {
  render() {
    const styles = {
      fontFamily: 'Menlo-Regular, Menlo, monospace',
      fontSize: 14,
      lineHeight: '10px',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    };
    return (
      <Parallax ref='parallax' pages={3}>
        <Parallax.Layer
          offset={0}
          speed={1}
          style={
            {
              backgroundImage: `url(${parallax1})`,
            }
          } />
        <Parallax.Layer
          offset={1}
          speed={1}
          style={
            {
              backgroundImage: `url(${parallax2})`
            }
          } />
        <Parallax.Layer
          offset={2}
          speed={1}
          style={
            {
              backgroundImage: `url(${parallax3})`
            }
          }/>
        <Parallax.Layer
          offset={0}
          speed={0.5}
          style={styles}
          onClick={() => this.refs.parallax.scrollTo(1)}
        >
          Click!
        </Parallax.Layer>
        <Parallax.Layer
          offset={1}
          speed={-0.1}
          style={styles}
          onClick={() => this.refs.parallax.scrollTo(2)}
        >
          Another page ...
        </Parallax.Layer>
        <Parallax.Layer
          offset={2}
          speed={0.5}
          style={styles}
          onClick={() => this.refs.parallax.scrollTo(0)}
        >
          The end.
        </Parallax.Layer>
      </Parallax>
    );
  }
}

export default Home;
