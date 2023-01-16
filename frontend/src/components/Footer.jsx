const Footer = () => {
  return (
    <div>
        <footer className="py-3 card navbar-dark border-top" id="footer">
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-12 text-center">
                        <a className="me-0 pb-4" href="https://www.tutorialspoint.com">
                            <img className="light-mode-item h-100px" src="https://www.tutorialspoint.com/static/images/logo-color-footer.png" alt="Tutorials Point" />
                            <img className="dark-mode-item h-100px" src="https://www.tutorialspoint.com/static/images/logo-footer-b.png" alt="Tutorials Point" />
                        </a>
                        <ul className="nav justify-content-center py-3 mt-md-0 ">
                            <li className="nav-item"><a className="nav-link fw-bold" href="https://www.tutorialspoint.com/about/index.htm"><i className="fal fa-globe"></i> About us</a></li>
                            <li className="nav-item"><a className="nav-link fw-bold" href="https://www.tutorialspoint.com/about/return_refund_policy.htm"> <i className="fal fa-check"></i> Refund Policy</a></li>
                            <li className="nav-item"><a className="nav-link fw-bold" href="https://www.tutorialspoint.com/about/about_terms_of_use.htm"><i className="fal fa-check"></i> Terms of use</a></li>
                            <li className="nav-item"><a className="nav-link fw-bold" href="https://www.tutorialspoint.com/about/about_privacy.htm"> <i className="fal fa-shield-check"></i> Privacy Policy</a></li>
                            <li className="nav-item"><a className="nav-link fw-bold" href="https://www.tutorialspoint.com/about/faq.htm"><i className="fal fa-question-circle"></i> FAQ's</a></li>
                            <li className="nav-item"><a className="nav-link fw-bold" href="https://www.tutorialspoint.com/about/contact_us.htm"><i className="fal fa-map-marker-alt"></i> Contact</a></li>
                        </ul>
                        <p className="small">© Copyright 2022. All Rights Reserved.</p>
                    </div>
                    <div id="privacy-banner">
                        <div>
                            <p>We make use of cookies to improve our user experience. By using this website, you agree with our Cookies Policy.
                                <a id="banner-accept" href="#">Agree</a>
                                <a id="banner-learn" href="https://www.tutorialspoint.com/about/about_cookies.htm" target="_blank">Learn more</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

        <div className="back-top">
        <i className="fal fa-angle-up position-absolute top-50 start-50 translate-middle"></i>
        </div>
    </div>
  )
}

export default Footer