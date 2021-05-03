import Button from '../../UI/Button/Button';
import AboutImage from '../../../assets/images/About.jpg';
import './About.scss';

const About = props => {
  return (
    <div className="About">
      <div className="About_Image">
        <img src={AboutImage} alt="" />
      </div>
      <div className="About_Content">
        <h1 className="About_Title">Tentang Kami</h1>
        <h3 className="About_Subtitle">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
        </h3>
        <p className="About_Paragraph">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet…
        </p>
        <Button btnType="About_CTA">Selanjutnya</Button>
      </div>
    </div>
  );
}

export default About;