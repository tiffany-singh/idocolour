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
        <div className="ml-8 pt-8 w-1/3 font-mono">
          <h1 className="mb-5 uppercase tracking-wide font-thin md:text-5xl text-4xl text-black">
            I Do Colour
          </h1>
          <p className="tracking-wide font-hairline text-black md:text-2xl text-sm">
            A mindful colour consultancy company
          </p>
          <br></br>
          <p className="tracking-wide font-hairline text-black md:text-2xl text-sm">
            Artist Website: <a href="https://www.tiffanysingh.com">www.tiffanysingh.com</a>
          </p>
          <br></br>
          <p className="tracking-wide font-hairline text-black md:text-2xl text-sm">
            Contact: info@idocolour.com
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