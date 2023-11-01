import React, { Component, Fragment } from 'react';
import { EpkFullscreenImage } from '../components/FullscreenImage';
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
        {/* <EpkFullscreenImage image='../images/about.jpg'> */}
        <body className="bg-yellow">
        <NavMenu menuList={this.props.menuList} musicParams={options} />
          <div className="ml-10 pt-5 font-mono">
            <p className="flex-wrap tracking-wide font-hairline md:text-2xl text-sm text-purple font-mono leading-loose ">
            <h2>ido.colour</h2> 
ido.colour is the creation of artist Tiffany-Tara Singh. Well established  in the fine art world, her internationally respected practice positions colour as a medium for health promotion and therapeutic intervention. 
<br></br>  
<br></br>  
<h2>about</h2>
Through my extensive studies of colour and the relationship between colour and behaviour, I have recognised that more often than not, we choose colours based on how they appear rather than how they make us feel. From understanding the powerful relationship dynamics we build with colour, I have designed a colour consultancy service to shine a light on the importance of incorporating colour into our daily lives. 

Independent from paint brands and with an acute focus on hue and vividness, ido.colour aesthetics present an holistic approach that enhances integrated healing environments to support wellbeing through the use of colour in architectural spaces. Not simply a tool for creating aesthetic interest, colour can evoke emotions, convey a sense of identity, emphasise design features, and create depth and dimension through the use of shade, hue and tone to create spaces that feel safe, healing and inspiring.
<br></br>  
<br></br>  
<h2>why it is important?</h2> 
Colour therapy has been studied to treat various physical and mental health issues, including seasonal affective disorder (S.A.D.), age-related cognitive decline, depression, and hypertension, among others. Colour can be used as a self management methodology colour coding spaces to help lengthen independent living for early onset dementia patients and aid self management for ADD and ADHD adults and children
environmental colour design 
Colour is a universal visual language and when used thoughtfully in the world of design and architecture can transform the essence and feeling of the environment. Environmental colour design focuses on the complete experience of the architectural space to create, highlight and illuminate, individual yet cohesive spaces that transmit sensation, comfort and nourishment. As transitions from one space to another are considered with fluid and balanced colour palettes and designed to create a journey through the field of colour.

Whether subtle, bold or combinations of both  ido.colour specialises in bringing to life architectural spaces based on our humanity, consider psychological, cultural and social and aesthetic factors equally, with focus on sustainable spaces that are malleable, modern and sympathetic to environmental considerations.

Over time the use of colour in contemporary architecture has become minimal and more nuanced, we have witnessed a fear of colour with beige, grey and white becoming safe and sterile choices in modern spaces. ido.colour allows for greater creativity and expression while still maintaining a strong connection to the natural world. 

With a fine art eye for detail the visual experience of the client will not only be aesthetically rewarding but also enhance productivity, well-being, and the overall experience of those who inhabit it. Be bold, choose colour,  live better  
<br></br> 
            <br></br> 
<p>- Tiffany-Tara Singh </p>
            </p>
            <br></br> 
            <br></br> 
            </div>
        {/* </EpkFullscreenImage> */}
        </body>
      </Fragment>
    );
  }
}

export default Projects;
