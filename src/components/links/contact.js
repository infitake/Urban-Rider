import React, {Component} from 'react';
import Nitkkr from '../../nitkkr.png'

class Contact extends Component {
    state = {
        name : "",
        email : "",
        mobile_number : "",
        profession : "" ,
        formSubmitted: false
    }
    // setState({
    //     name : props.name,
    //     email : props.email,
    //     mobile_number : props.mobile_number,
    //     profession = props.profession
    // })
    // handleChange = (e) => {
    //     this.setState({
    //         [e.target.id]: e.target.value
    //     });
    // }
    // handleSubmit = (e) => {
    //     e.preventDefault();
        
    //     console.log(this.state.email,
    //                 this.state.name,
    //                 this.state.mobile_number,
    //                 this.state.profession
    //                 );
    // }
      handleChange = this.handleChange.bind(this);
      handleSubmit = this.handleSubmit.bind(this);
    //   static receiverEmail = 'infirao@gmail.com';
    //   static template = 'template_VHkJ1v3U';
    
    
      handleChange(e) {
        this.setState({
                    [e.target.id]: e.target.value
            });
      }
    handleSubmit (event) {
        event.preventDefault()
        // console.log(this.props.env)
        // const {
        //   REACT_APP_EMAILJS_RECEIVER: receiverEmail,
        //   REACT_APP_EMAILJS_TEMPLATEID: template
        // } = this.props.env
        let  receiverEmail = 'ravinder_11710558@gmail.com';
        let template = 'template_VHkJ1v3U';
    
        this.sendFeedback(
          template,
          this.state.email,
          receiverEmail,
          this.state.name,
          this.state.email,
          this.state.mobile_number,
          this.state.profession
          )
    
        this.setState({
          formSubmitted: true
        })
      }
    
      sendFeedback (templateId, senderEmail, receiverEmail, name, email, mobile_number, profession) {
        window.emailjs.send(
          'gmail',
          templateId,
          {
            senderEmail,
            receiverEmail,
            name,
            email,
            mobile_number,
            profession
          })
          .then(res => {
            this.setState({ formEmailSent: true });
            alert("email is send to author");
            this.setState = {
                name : "",
                email : "",
                mobile_number : "",
                profession : "" 
            }
          })
          // Handle errors here however you like, or use a React error boundary
          .catch(err => console.error('Failed to send feedback. Error: ', err))
      }
    render() {
        return (
            <div className="container">
            <h1 className="input-Entrys">CONTACT US</h1>
            <div className="all-contant">
                <div className="entry-form">  
                    <form className="feedbacks-form" onSubmit={this.handleSubmit}>
                    <div className="input-field">
                        {/* <label htmlFor="name">Name</label> */}
                        <input type="text" id='name' name="name"  onChange={this.handleChange} placeholder="Name"/>
                    </div>
                    <div className="input-field">
                        {/* <label htmlFor="email">Email</label> */}
                        <input type="email" id='email' name="email" onChange={this.handleChange} placeholder="Email" />
                    </div>
                    <div className="input-field">
                        {/* <label htmlFor="mobile-number">Mobile Number</label> */}
                        <input type="text" id='mobile_number' name="mobile_number" onChange={this.handleChange} placeholder="Mobile Number" />
                    </div>
                    <div className="input-field">
                        {/* <label htmlFor="profession">Profession(Developer, Designer, Student)</label> */}
                        <input type="text" id='profession' name="profession" onChange={this.handleChange}  placeholder="Profession(Developer, Designer)"/>
                    </div>
                    <div className="input-field">
                        <button className="btn">Submit</button>
                    </div>
                    </form>
                </div>
                <div className="area-map">
                    <img src = {Nitkkr} alt="nitImage" />
                </div> 
                </div> 
                <p className="foot">Give Us a Call at +91-7799-14-5959</p>  
            </div>
        )
    }
}

export default Contact;