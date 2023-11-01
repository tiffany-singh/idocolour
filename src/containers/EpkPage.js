import React, { Component, Fragment } from 'react';
import { EpkFullscreenImage } from '../components/FullscreenImage';
import options from "../containers/MusicPlayerOptions";
import ReactPlayer from 'react-player';
import SocialIcon from '../components/SocialIcon';

class EpkPage extends Component {
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
        <EpkFullscreenImage className="h-auto" image={`../images/${this.details.image}`}>
          <div className="md:text-justify text-white pt-12 font-hairline md:flex md:flex-wrap justify-center md:px-20 md:mx-32 mx-12 whitespace-pre-wrap">
            <h1 className="flex-wrap mb-5 uppercase md:tracking-wide font-thin text-4xl">
              {this.details.title}
            </h1>
          </div>
          <div className="md:flex justify-center md:mx-32 mx-12 mt-4 pt-4">
            {this.props.media.map(item => (
              <li key={item.id} className="flex">
                <ReactPlayer url={item.url} className="yarnlist-none"/> 
              </li>
            ))}
          </div>
          <div className="text-center text-lg justify-center whitespace-pre-line text-white font-thin pt-8 pb-20 md:flex md:flex-wrap md:mx-32 mx-12">
          <div className="pt-8">
          <p>Steven Hue is most at home in the body of the mind. Hue creates atmospheric soundscapes with a rich blend of electronic sounds and acoustic instrumentation. His evocative vocals stir memories from beyond the edge of conscious reason.</p>
          <br/><br/>
          <p> Tapping a rich vein of influences with the tenacity of a musical junkie, Hue fuses ambient soundscapes, experimental rock, and electronica with seamless and satisfying originality.</p>
          <br/><br/>
          <p>Hailing from Aotearoa (New Zealand), Hue studied at the Nelson School of Music and is currently based in Tasmania. As vocalist and co-writer for experimental Kiwi band <a href="https://www.stevenhue.com/projects/fullcode">Full Code</a>, Hue experienced the rush of performing live for a highly appreciative fan base. Full Code released a self titled EP in 2009, and full-length album, Telescapes in 2014.</p>
          <br/><br/>
          <p>Since 2015, Hue has been intensively developing his expertise in music production and sound design, which has led to commissions for prestigious art installations, short films and games.</p>
          <br/><br/>
          <p> In late 2021, Steven Hue made his solo debut with two releases that flaunt his transition from band frontman to solo electronic artist.</p>
          </div>
        </div>
        <div className="content-center mt-2 pb-20 flex items-center justify-center flex-wrap md:mx-32">
                <SocialIcon route="https://www.instagram.com/stevenhue.music/" imgSrc='images/INSTA.png' />
                <SocialIcon route="https://twitter.com/steven_hue" imgSrc='images/twit_icon.png' />
              </div>
        </EpkFullscreenImage>
      </Fragment>
    );
  }
}

export default EpkPage;
