import './NavigationItem.scss';
import { NavLink } from 'react-router-dom';

const NavigationItem = props => {
  return (
    <li className="NavigationItem" onClick={props.toggle}>
      <NavLink
        to={props.link}
        activeClassName="active"
        exact
      >{props.children}</NavLink>
    </li>
  );
}

export default NavigationItem;