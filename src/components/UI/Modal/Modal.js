import React from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';

import './Modal.scss';
import Backdrop from '../Backdrop/Backdrop';

const Modal = props => {
  return (
    <React.Fragment>
      <Backdrop show={props.show} click={props.clicked} />
      <CSSTransition
        in={props.show}
        timeout={300}
        mountOnEnter
        unmountOnExit
        classNames={{
          enterActive: 'Show',
          enterDone: 'Show',
          exitActive: 'exitActive'
        }}
      >
        <div className="Modal">
          {props.children}
        </div>
      </CSSTransition>
    </React.Fragment>
  );
}

export default React.memo(
  Modal,
  (prevProps, nextProps) =>
    nextProps.show === prevProps.show &&
    nextProps.children === prevProps.children
);