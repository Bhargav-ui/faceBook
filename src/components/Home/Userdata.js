import { faEnvelope, faEye, faMobile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Userdata = ({ name, mobile, email, password }) => {
  return (
    <>
      <h3>{name}</h3>
      <p>
        <span className="text-primary">
          <FontAwesomeIcon icon={faMobile} />
        </span>
        {mobile}
      </p>
      <p>
        <span className="text-primary">
          <FontAwesomeIcon icon={faEnvelope} />
        </span>
        {email}
      </p>
      <p>
        <span className="text-primary">
          <FontAwesomeIcon icon={faEye} />
        </span>
        {password}
      </p>
    </>
  );
};

export default Userdata;
