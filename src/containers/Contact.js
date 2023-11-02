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
      formStyle: "visible mt-2 mb-24 p-8 ",
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
          <div className='flex justify-center'>
            <div className="visibile mt-32 p-8 w-2/3">
            <div className="md:w-1/3 mx-auto">
              <p className="text-5xl visible mx-auto my-auto w-full text-white font-mono text-left pb-8 tracking-wide mt-32 underline decoration-pink-500">contact</p>  
                <p className="visible text-lg text-white text-left text-bold font-bold font-mono tracking-wide md:mt-5">email: info@idocolour.com</p>
                <br></br>
                <p className="visible text-lg text-white font-mono text-left font-bold tracking-wide md:mt-5">artist: www.tiffanysingh.com</p>
                <br></br>
                <p className="visible text-lg text-white font-mono text-left font-bold tracking-wide md:mt-5">instagram: @ido.colour</p>
              </div>
          </div>
        </div>
      </FullscreenImage>
    );
  }
}

export default Contact;