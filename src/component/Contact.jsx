import React, { Component } from 'react';
import ContactForm from './ContactForm'

class Contact extends Component { 

    render() {
        return (
            <>
                <div class="container h-100">
                    <div class="row h-100 justify-content-center align-items-center">
                        <div class="col-10 col-md-8 col-lg-6">
                            <div className="contact">
                                <h3> Welcome to Contact page. </h3>
                                <br />
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Contact;