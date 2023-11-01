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
        {/* <NavMenu menuList={this.props.menuList} musicParams={options} /> */}
        <div className="ml-8 pt-8 w-1/3 font-sans">
          <h1 className="mb-5 uppercase tracking-wide font-thin md:text-5xl text-4xl text-white">
            I Do Colour
          </h1>
          <p className="tracking-wide font-hairline text-white md:text-2xl text-sm">
            Colour consultancy by Tiffany Singh
          </p>
        </div> 
        {/* <div className="items-stretch md:w-1/4 w-2/3 md:flex fixed md:pin-r pin-b m-20 justify-center">
          <TextButton text='Projects' route='/projects'/>
          <TextButton text='Commissions' route='/commissions'/>
        </div> */}
      </FullscreenImage>
    );
  }
}

export default Home;