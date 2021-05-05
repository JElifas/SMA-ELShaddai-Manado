import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import './Toolbar.scss';

const Toolbar = props => {
  return (
    <header className="Toolbar">
      <button className="Button_Toolbar" onClick={props.toggle}>
        <svg width="38" height="38" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path d="M24 18v1h-24v-1h24zm0-6v1h-24v-1h24zm0-6v1h-24v-1h24z"/><path d="M24 19h-24v-1h24v1zm0-6h-24v-1h24v1zm0-6h-24v-1h24v1z" /></svg>
      </button>
      <div className="Logo_Container">
        <Logo />
      </div>
      <div className="Navigation_Container">
        <NavigationItems click={props.toggle} />
      </div>
    </header>
  );
}

export default Toolbar;