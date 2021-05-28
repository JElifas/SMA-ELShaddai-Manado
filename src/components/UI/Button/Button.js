import './Button.scss';

const Button = props => {
  const classes = ['Button'];
  classes.push(props.btnType);

  return (
    <button 
      className={classes.join(' ')}
      disabled={props.disabled}
      onClick={props.click} >
      {props.children}
    </button>
  )
}

export default Button;