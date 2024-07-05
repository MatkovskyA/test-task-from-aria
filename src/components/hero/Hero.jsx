import "./_hero.scss"
import Advantages from "../advantages/Advantages";

const Hero = () => {
  return (
    <main>
      <div className="container">
        <div className="hero-wrapper">
          <h1 className="hero-title">Do you want to Learn more About cryptocurrencies <span>quickly and easily ?</span></h1>
          <p className="hero-subtitle">Subscribe to our channel to learn more</p>
        </div>
        <Advantages />
      </div>
    </main>

  )
}

export default Hero;