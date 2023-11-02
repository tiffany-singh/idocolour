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
        <body className="bg-yellow">
        <NavMenu menuList={this.props.menuList} musicParams={options} />
          <div className="mt-0 ml-20 mr-20 pt-24 font-mono">
            <p className="flex-wrap tracking-wide text-justify font-hairline md:text-2xl text-purple font-mono leading-loose ">
            <p className="text-center text-2xl italic">"colours are the subconscious native tongue" - carl jung </p>
            <br></br> 
            <h1 className="text-left">ido.colour</h1> 
            ido.colour is the creation of artist Tiffany-Tara Singh. well established in the fine art world, her 
            internationally respected practice positions colour as a medium for health promotion 
            and therapeutic intervention
            <br></br>  
            <br></br>  
            <h1 className="text-left">about</h1>
            through my extensive studies of colour and the relationship between colour and behaviour, 
            I have recognised that more often than not, we choose colours based on how they appear rather 
            than how they make us feel
            <br></br>  
            <br></br>  
            from understanding the powerful relationship dynamics we build with colour, 
            I have designed a colour consultancy service to shine a light on the 
            importance of incorporating colour into our daily lives 
            <br></br>  
            <br></br>  
            independent from paint brands and with an acute focus on hue and vividness, 
            ido.colour aesthetics present an holistic approach that enhances integrated healing environments 
            to support wellbeing through the use of colour in architectural spaces. Not simply a tool for 
            creating aesthetic interest, colour can evoke emotions, convey a sense of 
            identity, emphasise design features, 
            and create depth and dimension through the use of shade, 
            hue and tone to create spaces that feel safe, healing and inspiring
            <br></br>  
            <br></br>  
            <h1 className="text-left">why it is important?</h1> 
            colour therapy has been studied to treat various 
            physical and mental health issues, 
            including seasonal affective disorder (S.A.D.),
            age-related cognitive decline, depression, and hypertension, among others. 
            colour can be used as a self management methodology colour coding spaces to help lengthen independent 
            living for early onset dementia patients and aid self management for ADD and ADHD 
            adults and children
            <br></br>  
            <br></br> 
            <h1 className="text-left">ido.colour environmental colour design</h1>
            colour is a universal visual language and when used thoughtfully in the world of 
            design and architecture can transform the essence and feeling of the environment. 
            environmental colour design focuses on the complete experience of the architectural 
            space to create, highlight and illuminate, individual yet cohesive spaces that 
            transmit sensation, comfort and nourishment. as transitions from one space to another 
            are considered with fluid and balanced colour palettes and designed to create a 
            journey through the field of colour
            <br></br>  
            <br></br> 
            whether subtle, bold or combinations of both; 
            ido.colour specialises in bringing to life architectural spaces based on our humanity, with consideration of psychological, cultural and social and aesthetic factors equally. 
            focussing on sustainable spaces that are malleable, modern and sympathetic to environmental considerations
            <br></br>  
            <br></br> 
            over time the use of colour in contemporary architecture has become 
            minimal and more nuanced, we have witnessed a fear of colour 
            with beige, grey and white becoming safe and sterile choices in modern spaces. 
            ido.colour allows for greater creativity and expression while still 
            maintaining a strong connection to the natural world
            <br></br>  
            <br></br> 
            with a fine art eye for detail the visual experience of the client will not only be aesthetically 
            rewarding but also enhance productivity, well-being, and the overall experience of those who inhabit it 
            <br></br>  
            <br></br> 
            be bold, choose colour, live better  
            <br></br> 
            <br></br> 
            <p>- Tiffany-Tara Singh </p>
            <br></br> 
            <br></br> 
            <p className="italic text-1xl text-justified">“many aspects of humankind's explorations are ignored, neglected or discarded. 
              colour medicine is one of these neglected items. the common feature of 
              every remedial and curative system of treatment, 
              whether it is Ayurveda, allopathy, 
              acupuncture, Unani, homoeopathy, biochemic, magnetotherapy, 
              physiotherapy, radiotherapy, aromatherapy, reflexology or chromotherapy, 
              is to somehow apply vibrations of one kind or another in such a 
              manner that the body can be put back on the health track. 
              most systems induce vibrations indirectly, 
              but there are a few in which the vibrations are used directly upon the body, 
              and chromotherapy is one of them” - The National Center for Biotechnology Information</p>
            <br></br> 
            <br></br> 
            </p>
            </div>
        </body>
      </Fragment>
    );
  }
            }

export default Projects;
