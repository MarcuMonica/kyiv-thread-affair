export default function Footer() {
  return (
    <footer className="footer">
      <section className="footer-primary p-5">
        <div className="footer-primary-inner container">
          <nav className="footer-nav">
            <ul>
              <li>
                <a href="https://x.ro" title=""></a>
              </li>

              <li>
                <a href="https://x.ro" title="Information">
                  Information
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="Contact Us">
                  Contact Us
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="Track my order">
                  Track my order
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="Shipping">
                  Shipping
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="Free Returns">
                  Free Returns
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="My Account">
                  My Account
                </a>
              </li>
            </ul>

            <ul>
              <li>
                <a href="https://x.ro" title=""></a>
              </li>

              <li>
                <a href="https://x.ro" title="Careers">
                  Careers
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="About Us">
                  About Us
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="Our Story">
                  Our Story
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="Art &amp; Culture">
                  Art &amp; Culture
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="Our private labels">
                  Our private labels
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="Stores">
                  Stores
                </a>
              </li>
            </ul>

            <ul>
              <li>
                <a href="https://x.ro" title=""></a>
              </li>

              <li>
                <a href="https://x.ro" title="Services">
                  Services
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="Ship to store">
                  Ship to store
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="Gift Card">
                  Gift Card
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="Online Only">
                  Online Only
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="Tips &amp; Tricks">
                  Tips &amp; Tricks
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="Home">
                  Home
                </a>
              </li>
            </ul>

            <ul>
              <li>
                <a href="https://x.ro" title=""></a>
              </li>

              <li>
                <a href="https://x.ro" title="Loyalty Programs">
                  Loyalty Programs
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="Sign up to the Simons">
                  Sign up to the Simons
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="My Account">
                  My Account
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="Coditions">
                  Coditions
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="FAQ">
                  FAQ
                </a>
              </li>
            </ul>
          </nav>

          <section className="footer-contact">
            <h1>
              <span>Thread Affair</span> Milano
            </h1>

            <p>
              Largo Augusto 3, Milano, 20122, Milano, IT
              {/*display block pe ancore, no br*/}
              <a href="tel: +0039 02 760 003 66" title="Call Us">
                Tel: 0039 02 760 003 66
              </a>
              {/*use a:nth-of-type(1)*/}
              <a href="mailto:office@thread-affair.com" title="Email Us">
                office@thread-affair.com
              </a>
            </p>
          </section>

          <section className="footer-support">
            <ul>
              <li>
                <a href="https://x.ro" title="Support">
                  <i className="fa-solid fa-phone"></i>
                  Support
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="Chat">
                  <i className="fa-solid fa-comments"></i>
                  Chat
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="Email">
                  <i className="fa-solid fa-envelope-open-text"></i>
                  Email
                </a>
              </li>
            </ul>
          </section>
        </div>
      </section>

      <section className="footer-secondary text-center mt-4 d-none d-lg-block">
        <p>©2019 THREAD AFFAIR. All Rights Reserved.</p>

        <p>
          Designed by
          <img
            title=""
            data-test=""
            className="ms-2"
            src="/images/pixellab_logo.jpg"
            alt="Pixellab"
          />
        </p>
      </section>
    </footer>
  );
}
