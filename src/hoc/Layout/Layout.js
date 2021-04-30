import React, { useState } from 'react';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import './Layout.scss';

const Layout = props => {
  const [toggler, setToggler] = useState(false);

  const sideDrawerToggleHandler = () => {
    setToggler(!toggler);
  }

  const navToggleHandler = () => {
    setToggler(false);
  }

  return (
    <React.Fragment>
      <Toolbar toggle={sideDrawerToggleHandler} />
      <SideDrawer 
        toggle={sideDrawerToggleHandler}
        navToggler={navToggleHandler}
        show={toggler} />
      <main className="Main">
        {props.children}
      </main>
    </React.Fragment>
  );
}

export default Layout;