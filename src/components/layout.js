import React from "react"
import { Link } from "gatsby"

import soggyInk from "../../content/assets/soggy-ink.png"
import insta from "../../content/assets/instagram.png"
import github from "../../content/assets/github.png"
import codepen from "../../content/assets/codepen.png"
import twitter from "../../content/assets/twitter.png"

const Layout = props => {
  const { title, children } = props
  const [toggleNav, setToggleNav] = React.useState(false)
  return (
    <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
      <header className="site-head">
        <div className="site-head-container">
          <a
            className="nav-burger"
            href={`#`}
            onClick={() => setToggleNav(!toggleNav)}
          >
            <div
              className="hamburger hamburger--collapse"
              aria-label="Menu"
              role="button"
              aria-controls="navigation"
            >
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </a>

          <div className="site-head-right">
            <div className="social-links">
              <a
                href="https://github.com/soggyinkgames"
                title="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="zoomzoom"
                  src={github}
                  alt="instagram logo"
                  style={{ width: "30px" }}
                ></img>
              </a>
              <a
                href="https://twitter.com/SoggyInkGames"
                title="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="zoomzoom"
                  src={twitter}
                  alt="instagram logo"
                  style={{ width: "30px" }}
                ></img>
              </a>
              <a
                href="https://codepen.io/soggyinkgames"
                title="Codepen"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="zoomzoom"
                  src={codepen}
                  alt="instagram logo"
                  style={{ width: "30px" }}
                ></img>
              </a>
              <a
                href="https://www.instagram.com/soggyinkgames/"
                title="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="zoomzoom"
                  src={insta}
                  alt="instagram logo"
                  style={{ width: "30px" }}
                ></img>
              </a>
            </div>
          </div>

          <div className="site-head-center">
            <Link className="" to={"/"}>
              <img
                className="zoomzoom"
                src={soggyInk}
                alt="soggy ink octopus logo"
                style={{ width: "60px" }}
              ></img>
            </Link>
            <Link className="site-head-logo text" to={`/`}>
              {title}
            </Link>
          </div>

          <nav id="swup" class="site-head-left">
            <ul className="nav" role="menu">
              <li className="nav-home" role="menuitem">
                <Link to={`/`}>Home</Link>
              </li>
              <li className="nav-bio" role="menuitem">
                <Link to={`/bio`}>Who are we</Link>
              </li>
              <li className="nav-vision" role="menuitem">
                <Link to={`/vision`}>Vision</Link>
              </li>
              <li className="nav-blog" role="menuitem">
                <Link to={`/blog`}>Dev Zone</Link>
              </li>
              <li className="nav-elements hidden" role="menuitem">
                <Link to={`/elements`}>elements</Link>
              </li>
              <li className="nav-whoarewe hidden" role="menuitem">
                <Link to={`/form`}>yes</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="site-main" className="site-main">
        <div id="swup" className="transition-fade">
          {children}
        </div>
      </main>

      <footer className="site-foot">
        &copy; {new Date().getFullYear()} <Link to={`/`}>{title}</Link> &mdash;
        Built with{" "}
        <a
          href="https://gatsbyjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Love
        </a>
      </footer>
    </div>
  )
}

export default Layout
