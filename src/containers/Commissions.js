import React, { Component, Fragment } from 'react';
import { FullscreenImage } from '../components/FullscreenImage';
import ImageButton from '../components/ImageButton';
import NavMenu from '../components/NavMenu';
import options from "./MusicPlayerOptions";

class Commissions extends Component {
  state = {
    params: options
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { params } = this.state;
    return (
      <Fragment>
        <FullscreenImage image='images/HueWeb.Commissions.Sphere.n.Squares.jpg'>
        <NavMenu menuList={this.props.menuList} musicParams={options} />
          <div className="ml-5 pt-5 w-1/3 font-sans text-white">
            <h1 className="flex-wrap mb-5 uppercase tracking-wide font-thin md:text-5xl text-4xl">
            COMMISSIONS
            </h1>
            <p className="flex-wrap tracking-wide font-hairline md:text-2xl text-sm">
            Steven Hue has collaborated with a wide variety of professionals, including installation artists, musicians, producers, and filmmakers.
            <br/><br/>
            Hue enjoys meticulously working to a brief while adding his own flair.
            </p>
          </div>
        </FullscreenImage>
        <div>
          <h1 className="text-center font-sans font-thin mt-6">
          COMMISSIONS
          </h1>
        </div>
        <div className="bg-white md:flex flex-wrap md:mx-32 md:mb-12 md:p-0 p-8 justify-between">
          <ImageButton route="/commissions/beyondrefuge" label="Journey of a Million Miles" imgSrc='images/refuge_bg.jpg' />
          <ImageButton route="/commissions/totalinternalreflection" label="Total Internal Reflection" imgSrc='images/tir.jpg' />
          <ImageButton route="/commissions/untitleddream" label="Untitled Dream" imgSrc='images/untitled_dream_bg.jpg' />
          <ImageButton route="/commissions/returner" label="Returner O" imgSrc='images/hue.com-returner.jpg' />
        </div>
      </Fragment>
    );
  }
}

export default Commissions;
