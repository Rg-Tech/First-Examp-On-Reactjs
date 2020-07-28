import React, { Component } from 'react';

class ContactForm extends Component {
    constructor(props){
        super(props);
        this.state = {  
            fullname: "",
            email: "",
            phone : "",
            message : ""
         }
       }
       handlechangeall = (event) =>{
        this.setState ( { [event.target.name] :event.target.value  } )
       }

       handlesubmit = (event) => {
       // alert( JSON.stringify(this.state));
        console.log( JSON.stringify(this.state));
        event.preventDefault();
       }

    render() {
        return (
            <>
                
                <div className="mb-3">
                    <form onSubmit={this.handlesubmit} >
                    <div className="form-group col-md-8">
                        <label for="exampleFormControlInput1"> Fullname </label>
                        <input type="text" className="form-control" name="fullname" value={this.state.fullname}
                            onChange={this.handlechangeall} placeholder="Enyer your first name"/> <br />

                        <label for="exampleFormControlInput1"> Email </label><br />
                        <input type="email" className="form-control" name="email" value={this.state.email}
                            onChange={this.handlechangeall} placeholder="Enter your email ID"/> <br />

                        <label for="exampleFormControlInput1"> Mobile </label><br />
                        <input type="number" className="form-control" name="phone" value={this.state.phone}
                            onChange={this.handlechangeall} placeholder="Enter your phone no"/> <br />

                        <label for="exampleFormControlInput1"> Message </label>
                        <textarea value={this.state.message} className="form-control" name="message"
                            onChange={this.handlechangeall} placeholder="Hi this is message ..!!!"/>   <br />

                        <input type="submit" className="btn btn-primary mb-2" value="Send" />
                        </div>
                    </form>
                </div>
                <br/>
            </>
        )
    }
}

export default ContactForm;