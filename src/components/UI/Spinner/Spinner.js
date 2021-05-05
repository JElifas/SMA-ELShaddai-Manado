import './Spinner.scss';

const Spinner = () => {
  return (
    <div className="Spinner_Container">
      <div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  );
}

export default Spinner;