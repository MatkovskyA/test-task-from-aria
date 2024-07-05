import "./_whatsUpLink.scss";
import { Link } from "react-router-dom";


const WhatsUpLink = () => {

  const phoneNumber = '+79773023310'; // Номер телефона
  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };
  return (
    <div className="wrapper">
      <a href={`https://wa.me/${phoneNumber}`} target="_blank" className="wrapper-link" onClick={handleClick}>
        Join Whatsapp
      </a>
    </div>
  )
}

export default WhatsUpLink;