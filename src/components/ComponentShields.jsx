import PropTypes from "prop-types";
import '../styles/componentShields.css'

const ComponentShields = ({ srcImageShield, nameTeam }) => {
  return(
      <div id="container">
        <img id="shield" src={`${srcImageShield}`} alt='shield'/>
        <p id="shieldName">{`${nameTeam}`}</p>
      </div>
  )
};

ComponentShields.propTypes = {
  srcImageShield: PropTypes.string.isRequired,
  nameTeam: PropTypes.string.isRequired,
};

export { ComponentShields };
