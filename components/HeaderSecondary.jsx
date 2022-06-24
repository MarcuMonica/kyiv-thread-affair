export default function HeaderSecondary() {
  return (
    <section className="header-secondary">
      <div className="header-logo">
        <a href="https://pixellab.ro" title="Thread Affair">
          <img src="/images/logo.jpg" alt="Thread Affair - Logo"></img>
        </a>
      </div>

      <div className="header-support d-none d-lg-block">
        <ul>
          <li className="me-4">
            <a href="tel:1-877-666-1840" title="Call us">
              <i className="fa-solid fa-phone me-3"></i>
              Toll Free 1-877-666-1840
            </a>
          </li>

          <li>
            <a href="mailto: john.doe@example.com" title="Email us">
              office@threadaffair.com
            </a>
          </li>
        </ul>
      </div>

      <div className="header-search d-lg-none">
        <ul>
          <li>
            <a href="https://pixellab.ro" title="Menu">
              <i className="fa-solid fa-bars"></i>
            </a>
          </li>

          <li>
            <a href="https://pixellab.ro" title="Search">
              <i className="fa-solid fa-search"></i>
            </a>
          </li>
        </ul>
      </div>

      <div className="header-controls">
        <ul>
          <li className="position-relative">
            <a href="https://pixellab.ro" title="Cart">
              <i className="fa-solid fa-cart-shopping"></i>
              <span className="badge badge-small d-none d-lg-block">3</span>
            </a>
          </li>

          <li>
            <a href="https://pixellab.ro" title="My Account">
              <i className="fa-solid fa-user-astronaut d-lg-none"></i>
              <img
                src="/images/user-avatar.png"
                alt="My Account"
                className="d-none d-lg-block"
              ></img>

              <i className="fa-solid fa-angle-down d-none d-lg-block"></i>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
