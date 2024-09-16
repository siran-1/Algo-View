import '../css/footer.css'

function Footer() {
   return (
        <div className="container bg-dark shadow-sm p-3" id="footer-container">
            <a className="link" target='_blank' href="https://www.linkedin.com/in/siran28/"><i className="fab fa-linkedin"></i> LinkedIn</a>
            <a className="link" target='_blank' href="https://github.com/siran-1"><i className="fab fa-github"></i> GitHub</a>
        </div>
    );
}

export default Footer;