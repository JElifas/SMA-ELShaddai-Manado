import NavigationItem from './NavigationItem/NavigationItem';
import './NavigationItems.scss';

const NavigationItems = props => {
  return (
    <ul className="NavigationItems">
      <NavigationItem link="/" toggle={props.click}>Beranda</NavigationItem>
      <NavigationItem link="/Tentang" toggle={props.click}>Tentang Kami</NavigationItem>
      <NavigationItem link="/Tentang" toggle={props.click}>Pendaftaran Online</NavigationItem>
      <NavigationItem link="/Tentang" toggle={props.click}>Kontak</NavigationItem>
      <NavigationItem link="/Tentang" toggle={props.click}>Galeri</NavigationItem>
      <NavigationItem link="/Tentang" toggle={props.click}>Guru</NavigationItem>
    </ul>
  );
}

export default NavigationItems;