import "./_hero.scss"
import Advantages from "../advantages/Advantages";
import WhatsUpLink from "../whatsAppLink/WhatsAppLink";
import { LinkAplication } from "../link-aplication/LinkAplication"

import googleIcon from "../../assets/icons/google-play.svg"
import appIcon from "../../assets/icons/app.svg"

const Hero = () => {
  return (
    <main>
      <div className="container">
        <div className="hero-wrapper">
          <h1 className="hero-title">Do you want to Learn more About cryptocurrencies <span>quickly and easily ?</span></h1>
          <p className="hero-subtitle">Subscribe to our channel to learn more</p>
        </div>
        <Advantages />
        <WhatsUpLink />
        <div className="footer-wrapper">
          <LinkAplication
            icon={googleIcon}
            text={"get it on "}
            market={'Google play'}
          />
          <LinkAplication
            icon={appIcon}
            text={"Available on the"}
            market={'App Store'}
          />
        </div>
      </div>
    </main>

  )
}

export default Hero;