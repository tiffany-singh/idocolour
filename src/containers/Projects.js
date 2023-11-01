import React, { Component, Fragment } from 'react';
import { FullscreenImage } from '../components/FullscreenImage';
import ImageButton from '../components/ImageButton';
import NavMenu from '../components/NavMenu';
import options from "../containers/MusicPlayerOptions";

class Projects extends Component {
  state = {
    params: options
  };
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <Fragment>
        <FullscreenImage image='../images/HueWeb.Projects.Sphere.n.Squares.jpg'>
        <NavMenu menuList={this.props.menuList} musicParams={options} />
          <div className="ml-5 pt-5 w-1/3 font-sans text-white">
            <h1 className="flex-wrap mb-5 uppercase tracking-wide font-thin md:text-5xl text-4xl">
              Projects
            </h1>
            <p className="flex-wrap tracking-wide font-hairline md:text-2xl text-sm">
              Steven has always been drawn to experimental forms of expression which is evident in his work. 
              <br/><br/>
              An open-minded creative, genre does not constrain his approach to artistic expression, although he has an affinity for the dark and nuanced.
            </p>
          </div>
        </FullscreenImage>
        <div>
          <h1 className="text-center font-sans font-thin mt-6">
            PROJECTS
          </h1>
        </div>
        <div className="bg-white md:flex md:flex-wrap px-4 md:px-20 md:mx-32 md:mb-12 justify-around">
          <ImageButton route="/projects/assembly" label="Assembly" imgSrc='images/hue.assembly.web.6x9.jpg' />
          <ImageButton route="/projects/brainstare.manatorquim" label="Brainstare / Manatorquim" imgSrc='images/brain-manny-button-image-01.16.9.jpg' />
          <ImageButton route="/projects/fullcode" label="Full Code" imgSrc='images/fullcode_bg.jpg' />
          <ImageButton route="/projects/challengehaus" label="Challenge Haus" imgSrc='images/ch.jpg' />
        </div>
      </Fragment>
    );
  }
}

export default Projects;
