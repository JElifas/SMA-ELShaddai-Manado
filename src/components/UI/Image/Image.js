import { IMAGE_URL } from '../../../shared/utility';
import { motion } from 'framer-motion';

import './Image.scss';

const Image = props => {
  return (
    <div className="Img-Container" onClick={props.click}>
      <motion.img
        className="Images"
        src={IMAGE_URL + props.src}
        alt={props.alt}
        initial={{ opacity: '0' }}
        animate={{ opacity: '1' }}
      />
    </div>
  );
}

export default Image;