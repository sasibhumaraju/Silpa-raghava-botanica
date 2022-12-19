import React from 'react';
import './ModalForm.css';
import UserRequests from '../services/RequestsDataService';
class ModalForm extends React.Component{

    static defaultProps = {
        closeModalFuntion : ()=>{},
        plotNumber : 0,
    }



    constructor (props) {
        super (props)
        this.state = {
            name : '',
            phonenumber : '',
            email : '',
            nameError : '',
            phoneNumberError : '',
            emailError : '',
            isLoading : false,
          
        }
    }

    validateEmail = (mail) => {
      var r =   mail.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    
     if (r === null){
        this.setState({
            emailError : 'enter valid email'
        })
         return false
        }
        
      return true;
    }

    validateNumber = (phn) => {
        if(!Number.isNaN(phn) && phn.length === 10)
        {
            return true;
        }
        this.setState({
            phoneNumberError : 'enter 10 digit phone number'
        })

        return false;  
    }

    validateName = (name) => {
       if (name.length == 0){ 
        this.setState({
            nameError : 'enter valid name'
        })
        return false
     } return true;

    }

    handleOnChange = (event) => {
        this.setState({ [event.target.name] : event.target.value,
            nameError : '',
            phoneNumberError : '',
            emailError : ''
        })
        
    }

    handleSubmit = async (event) => {
        event.preventDefault();
      console.log(this.state.email,this.state.phonenumber,this.state.name)

      var emailt = this.validateEmail(this.state.email)
      var pt = this.validateNumber(this.state.phonenumber)
      var nt = this.validateName(this.state.name)

      console.log('email - ',emailt)
      console.log('phone - ',pt)
      console.log('anme - ',nt)

      if( (emailt && pt) && nt ) {
        this.setState({
            isLoading : true
        })
        var newRequestData = {
            'Name' : `${this.state.name}`,
            'Number' : `${this.state.phonenumber}`,
            'Email' : `${this.state.email}`,
            'PlotNumber' : `${this.props.plotNumber}`
              
         }
     await   UserRequests.addRequestData( newRequestData);
     this.props.closeModalFuntion();
      }
    }

    handleCloseModal = () => {
         this.props.closeModalFuntion();
    }

    render() {

        const sumitState = this.state.isLoading? "Submitting..." : "Submit"
        return (
            <div className='Modal'>
                <div className='ModalBody'>
                 <div className='Heading'> Request Price</div>  
                 <div className='HeadingContent'>Hey! Thank you for Interest in our property please provide us your details so that we can get back to you.</div> 
                 <form className='ModalForm' onSubmit={this.handleSubmit}>
                 <input id='name' name="name" type='text' placeholder='Your Name' value={this.state.name} onChange={this.handleOnChange}></input>
                 <div className='nameError'>{this.state.nameError}</div>
                 <input id='phonenumber' name="phonenumber" type='tel' placeholder='Phone Number' value={this.state.phonenumber} onChange={this.handleOnChange}></input>
                 <div className='phoneNumberError'>{this.state.phoneNumberError}</div>
                 <input id='email' name="email" type='email' placeholder='Email' value={this.state.email} onChange={this.handleOnChange}></input>
                 <div className='emailError'>{this.state.emailError}</div>
                 </form>
                 <div className='Buttons'> 
                 <button className='button-23' disabled={this.state.isLoading} onClick={this.handleCloseModal}>Cancel</button>
                 <button className='button-27' disabled={this.state.isLoading} onClick={this.handleSubmit}> {sumitState}  </button>
                 </div>
                 </div>
            </div>
        )
    }

}

export default ModalForm;