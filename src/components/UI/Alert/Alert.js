import React from 'react';

import './Alert.scss';

const Alert = props => {
  const className = ['Alert'];
  className.push(props.alertType);
  return (
    <div className={className.join(' ')}>
      <pre>{props.children}</pre>
    </div>
  )
}

export default Alert;