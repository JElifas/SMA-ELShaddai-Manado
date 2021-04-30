import Button from '../../UI/Button/Button';
import LandingImage from '../../../assets/images/Landing.jpg';
import './LandingPage.scss';

const LandingPage = props => {
  return (
    <div className="Landing_Page">
      <div className="Headline_Container">
        <h1>
          Raih Cita-cita Mu <br></br>
          di <span>SMA El-Shaddai</span>
        </h1>
        <Button btnType="Headline_CTA">Daftar Sekarang</Button>
      </div>
      <div className="Image_Container">
        <img src={LandingImage} alt="" />
      </div>
    </div>
  )
}

export default LandingPage;