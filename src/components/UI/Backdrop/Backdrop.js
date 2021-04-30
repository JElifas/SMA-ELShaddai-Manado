import CSSTransition from 'react-transition-group/CSSTransition';

import './Backdrop.scss';

const Backdrop = props => {
  return (
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
      <div className="Backdrop" onClick={props.click}></div>
    </CSSTransition>
  );
}

export default Backdrop;