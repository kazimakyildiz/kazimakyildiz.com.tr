import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import linkedin from '../img/social/linkedin.svg'
import kawhite from '../img/social/ka-white.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={kawhite}
            alt="Kazım Akyıldız"
            style={{ width: '14em', height: '4em' }}
          />
        </div>
        <div className="content has-text-left has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: '80vw' }} className="columns">
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="blog" to="/blog">
                        Tüm Yazılar
                      </Link>
                      <Link className="contact" to="/contact">
                        İletişim
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <a title="facebook" href="https://www.facebook.com/AkyildizKazim" target="_blank">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="linkedin" href="https://www.linkedin.com/in/kazim-akyildiz" target="_blank">
                  <img
                    src={linkedin}
                    alt="linkedin"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com/akyildizkazim" target="_blank">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="instagram" href="https://www.instagram.com/kazim_akyildiz/" target="_blank">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>  
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
