import "./_linkAplication.scss"

export const LinkAplication = ({ icon, text, market, linkMarket }) => {
  return (
    <div className="links-wrapper">
      <a href={linkMarket} target="_blank" className="links-inner">
        <div>
          <img src={icon} alt="Icon" />
        </div>
        <div className="links-description">
          <span className="links-text">{text}</span>
          <span className="links-market">{market}</span>
        </div>
      </a>
    </div>
  )
}