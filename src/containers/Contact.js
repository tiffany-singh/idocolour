import React, { Component } from 'react';
import { FullscreenImage } from '../components/FullscreenImage';
import options from "../containers/MusicPlayerOptions";
import validate from "../helpers/validate";
import Input from "../components/Input";
import SocialIcon from '../components/SocialIcon';
import NavMenu from '../components/NavMenu';

class Contact extends Component {
  constructor () {
    super();

    this.state = {

      emailSent: false,

      bttnStyle: "m-2 p-4 rounded-lg shadow-lg",
      formStyle: "visible mt-2 mb-24 p-8 sm:w-2/3 md:w-1/2",
      musicParams: options,
      
      formIsValid: false,

      formControls: {
        email: {
          value: '',
          placeholder: 'YOUR EMAIL ADDRESS',
          valid: false,
          touched: false,
          validationRules: {
            minLength: 3,
            isRequired: true,
            isEmail: true
          }
        },
        subject: {
          value: '',
          placeholder: 'YOUR SUBJECT',
          valid: false,
          touched: false,
          validationRules: {
            minLength: 0,
            isRequired: false
          }
        },
        body: {
          value: '',
          placeholder: 'YOUR MESSAGE',
          valid: false,
          touched: false,
          validationRules: {
            minLength: 3,
            isRequired: true
          }
        }
      }
    }
  }

  changeHandler = event => {

    const name = event.target.name;
    const value = event.target.value;
    
    const updatedControls = {
	    ...this.state.formControls
    };
    const updatedFormElement = {
	    ...updatedControls[name]
    };

    updatedFormElement.value = value;
    updatedFormElement.touched = true;
    updatedFormElement.valid = validate(value, updatedFormElement.validationRules);

    updatedControls[name] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedControls) {
      formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
    }

    let bttnStyle = formIsValid ? "m-2 p-4 bg-black text-white rounded-lg shadow-lg" : "m-2 p-4 rounded-lg shadow-lg";

    this.setState({
      formControls: updatedControls,
      formIsValid: formIsValid,
      bttnStyle: bttnStyle
    });
  }

  formSubmitHandler = () => {
    const formData = {};
    var service_id = "service_97i0in4";
    const templateId = 'contact_form';

    for (let formElementId in this.state.formControls) {
      formData[formElementId] = this.state.formControls[formElementId].value;
    }

    console.dir(formData);
  
    this.sendFeedback(service_id, templateId, { message: this.state.formControls.body.value, user_name: this.state.formControls.subject.value, user_email: this.state.formControls.email.value})
  }

  sendFeedback (service_id, templateId, variables) {
    window.emailjs.send(
      service_id, templateId,
      variables
      ).then(res => {
        this.setState({ emailSent: true });
      })
      // Handle errors here however you like, or use a React error boundary
      .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
  }

  render() {
    const { musicParams } = this.state;
    return (
      <FullscreenImage image="/images/contact.jpg">
          <NavMenu menuList={this.props.menuList} musicParams={musicParams} />
          <div className='flex object-center justify-center items-center self-auto w-100 h-100 md:mx-auto'>
            <div className={this.state.emailSent ? "invisible mt-2 mb-24 p-8 sm:w-2/3 md:w-1/2" : "visibile mt-2 mb-24 p-8 sm:w-2/3 md:w-1/2"}>
              <h1 className="visible mx-auto w-full text-white font-mono text-center pb-8 tracking-wide md:mt-32">CONTACT</h1>  
              <p className="visible w-full text-white font-mono text-center tracking-wide">EMAIL: info@idocolour.com</p>
              <p className="visible text-white font-mono text-center tracking-wide md:mt-5">ARTIST: www.tiffanysingh.com</p>
              <p className="visible text-white font-mono text-center tracking-wide md:mt-5">INSTAGRAM: @ido.colour</p>
          </div>
        </div>
      </FullscreenImage>
    );
  }
}

export default Contact;