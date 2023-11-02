import React, { Component } from 'react';
import TextButton from '../components/TextButton';
import { FullscreenImage } from '../components/FullscreenImage';
import NavMenu from '../components/NavMenu';
import options from "../containers/MusicPlayerOptions";

class Home extends Component {
  state = {
    params: options
  };
  render() {
    const { params } = this.state;
    return (
      <FullscreenImage image="/images/home.jpg">
        <NavMenu menuList={this.props.menuList} musicParams={options} />
        <div className="ml-8 pt-8 w-1/3 font-mono">
          <h1 className="mb-5 tracking-wide font-thin md:text-5xl text-4xl text-white">
            ido.colour
          </h1>
          <p className="tracking-wide font-hairline text-white md:text-2xl text-sm">
            a mindful
          </p>
          <p className="tracking-wide font-hairline text-white md:text-2xl text-sm">
            colour
          </p>
          <p className="tracking-wide font-hairline text-white md:text-2xl text-sm">
            consultancy
          </p>
          <p className="tracking-wide font-hairline text-white md:text-2xl text-sm">
            company
          </p>
        </div> 
        <div className="items-stretch md:w-1/4 w-1/2 md:flex fixed pin-b m-20 justify-center">
          <TextButton text='about' route='/about'/>
          <TextButton text='contact' route='/contact'/>
        </div>
      </FullscreenImage>
    );
  }
}

export default Home;