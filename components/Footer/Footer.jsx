import Link from "next/link";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer--overall--container">
      <div className="footer--container">
        <Link href="/" className="footer--logo--container">
          <img
            className="footer--logo"
            src="/images/cgs_long_logo.png"
            alt="Clarot German Shepherds Logo"
          />
        </Link>

        <div className="footer--mobile">
          <div className="footer--quick--links">
            <h1>Quick Links</h1>
            <Link href="/">Home</Link>
            <Link href="/ourdogs">Our Dogs</Link>
            <Link href="/litters">Litters</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/testimonials">Testimonials</Link>
            <Link href="/faq">FAQ</Link>
          </div>
          <div className="footer--contact--container">
            <h1>Contact Us</h1>
            <div className="footer--email">
              <i className="fa-solid fa-envelope"></i>
              <p>clarotk9dogs@gmail.com</p>
            </div>
            <Link href="/contact" className="footer--contact--link">
              Contact Us Now!
            </Link>
          </div>
          <div className="footer--affiliates">
            <h1>Affiliates</h1>
            <div className="footer--affiliates--images">
              <a href="https://www.ckc.ca/en" target="_blank" rel="noreferrer">
                <img
                  src="/images/ckc-logo.png"
                  className="footer--ckc--img"
                  alt="Canadian Kennel Club"
                />
              </a>
              <a href="http://www.gsscc.ca/" target="_blank" rel="noreferrer">
                <img
                  src="/images/gsscc-logo.png"
                  className="footer--gsscc--img"
                  alt="German Shepherd Schutzhund Club of Canada"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer--bottom--container">
        <div className="footer--copyright--container">
          <p className="footer--copyright--text">
            Copyright &copy;2023 All Rights Reserved &bull;
          </p>
          <a
            href="https://www.linkedin.com/in/justin-medeiros-016a38223/"
            target="_blank"
            rel="noreferrer"
          >
            <p className="footer--name">Created by Justin Medeiros</p>
          </a>
        </div>
        <div className="footer--icons--container">
          <a
            href="https://www.instagram.com/clarotgermanshepherds/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://www.facebook.com/k9dogs.ca/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-square-facebook"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
