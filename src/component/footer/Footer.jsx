import React, { Component } from 'react';

class Footer extends Component {

    render() {
        return (
            <>
                <div className="navbar fixed-bottom navbar-expand-sm navbar-dark bg-dark">
                    <footer className="page-footer font-small blue ">
                        <div className="footer-copyright text-center py-3">© 2020 Copyright:
                        <a href=""> Reactjs.com</a>
                        </div>
                    </footer>
                </div>
            </>
        )
    }
}

export default Footer;