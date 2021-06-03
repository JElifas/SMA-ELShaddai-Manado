import { IMAGE_URL } from '../../../shared/utility';

import './SingleImage.scss';

const SingleImage = props => {
  const image = props.image.map(img => (
    <img
      key={img.id}
      className="SingleImage"
      src={IMAGE_URL + img.imageUrl} 
      alt={img.imageUrl} />
  ));

  return image;
}

export default SingleImage;