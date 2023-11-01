import React, { Component, Fragment } from 'react';
import { FullscreenImage } from '../components/FullscreenImage';
import options from "../containers/MusicPlayerOptions";
import NavMenu from '../components/NavMenu';
import ReactPlayer from 'react-player';

class StandardPage extends Component {
  state = {
    params: options
  };
  details = this.props.inputData
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <Fragment>
        <FullscreenImage image={`../images/${this.details.image}`}>
        <NavMenu menuList={this.props.menuList} musicParams={options} />
          <div className="ml-5 pt-5 w-1/3 font-sans text-white">
            <h1 className="flex-wrap mb-5 uppercase tracking-wide font-thin text-5xl">
              {this.details.title}
            </h1>
            <p className="flex-wrap tracking-wide font-hairline md:text-2xl text-sm">
              {this.details.subtitle}
            </p>
          </div>
        </FullscreenImage>
        <div>
          <h1 className="text-center font-sans font-thin mt-6">
            {this.details.title}
          </h1>
        </div>
        <div className="text-justify font-thin bg-white md:flex md:flex-wrap p-8 md:px-20 md:mx-32 whitespace-pre-wrap">
            {this.details.copy} 
        </div>
        <div className="md:flex justify-center md:mx-32 mx-12 mb-24 mt-16">
          <ul className="md:flex p-0">
            {this.props.media.map(item => (
              <li key={item.id} className="flex">
                <ReactPlayer url={item.url} className="yarnlist-none p-2"/> 
              </li>
            ))}
          </ul>
        </div>
      </Fragment>
    );
  }
}

export default StandardPage;
