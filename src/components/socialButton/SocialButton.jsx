import "./SocialButton.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"; 
const SocialButton = () => {
  return (
    <div className="fonts" style={{fontSize:"2em"}}>
        <div className="border">
        <FontAwesomeIcon icon={faFacebook} /> 
        </div>
        <div className="border">
        <FontAwesomeIcon icon={faGithub} />
        </div>
        <div className="border">
        <FontAwesomeIcon icon={faLinkedin} />
        </div>
      
    </div>
  );
};

export default SocialButton;






