import React from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';

import './ModalImage.scss';
import Backdrop from '../Backdrop/Backdrop';

const ModalGallery = props => {
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
        <div className="ModalImage">
          {props.children}
        </div>
      </CSSTransition>
    </React.Fragment>
  );
}

export default React.memo(
  ModalGallery,
  (prevProps, nextProps) =>
    nextProps.show === prevProps.show &&
    nextProps.children === prevProps.children
);