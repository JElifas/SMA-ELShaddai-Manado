import { NavLink } from 'react-router-dom';

import logoImage from '../../assets/images/Logo.jpeg';
import './Logo.scss';

const Logo = props => {
  return (
    <div className="Logo">
      <NavLink to="/">
        <img src={logoImage} alt="El-Shaddai" />
        <h3>SMA El-Shaddai <br></br> Manado</h3>
      </NavLink>
    </div>
  );
}

export default Logo;