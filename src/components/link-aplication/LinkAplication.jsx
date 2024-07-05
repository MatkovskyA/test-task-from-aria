import "./_linkAplication.scss"
// import { SpriteIcon } from "../spriteIcon/SpriteIcon"

export const LinkAplication = ({ icon, text, market }) => {
  return (
    <div className="wrapper-links">
      <a href="">
        <div>
          <img src={icon} alt="Icon" />
        </div>
        <div className="wrapper-inner">
          <span className="wrapper-text">{text}</span>
          <span className="wrapper-market">{market}</span>
        </div>
      </a>

    </div>
  )
}