import React from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';

import Backdrop from '../../UI/Backdrop/Backdrop';
import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.scss';

const SideDrawer = props => {
  // const assignedClass = ['SideDrawer'];

  // assignedClass.push(props.show ? 'Show' : null);
  return (
    <React.Fragment>
      <Backdrop show={props.show} click={props.toggle} />
      <CSSTransition
        in={props.show}
        timeout={300}
        mountOnEnter
        unmountOnExit
        classNames={{
          enterActive: 'Show',
          enterDone: 'Show',
          exitActive: 'Exit'
        }}
      >
        <nav className="SideDrawer">
          <NavigationItems click={props.navToggler} />
        </nav>
      </CSSTransition>
    </React.Fragment>
  );
}

export default SideDrawer;