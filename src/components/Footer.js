import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className="py-5 bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 mb-4 mb-lg-0">
                            <h5>covid19india tracker</h5>
                            <ul className="contact-info list-unstyled">
                                <li><a href="mailto:mail@gmail.com" className="text-dark">mail@gmail.com</a></li>
                                <li><a href="tel:+999999999" className="text-dark">999999999</a></li>
                            </ul>
                            <p className="text-muted">Feel free to contact us.</p>
                        </div>
                        <div className="col-lg-5 col-md-6">
                            <h5>Pages</h5>
                            <ul className="links list-unstyled">
                                <li> <a href="/about" className="text-muted">About</a></li>
                                <li> <a href="/privacy" className="text-muted">Privacy Policy</a></li>
                                <li> <a href="/terms" className="text-muted">Terms &amp; Conditions</a></li>
                            </ul>
                        </div>
                        <div className="col">
                            <h5>Social</h5>
                            <ul className="links list-unstyled">
                                <li> <a href="https://www.facebook.com/" className="text-primary">
                                    <i className="bi bi-facebook" aria-hidden="true" /> Facebook</a></li>
                                <li> <a href="#" className="text-danger">
                                    <i className="bi bi-instagram" aria-hidden="true" /> Instagram</a></li>
                                <li> <a href="https://www.linkedin.com/company/">
                                    <i className="bi bi-linkedin" aria-hidden="true" /> LinkedIn</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-3 bg-dark text-white">
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <p className="mb-md-0">© 2021 iravikds: V1.0.0. Develop with <i className="bi bi-heart"></i> in India.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer;