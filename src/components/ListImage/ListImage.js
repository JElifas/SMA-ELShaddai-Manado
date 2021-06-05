import Image from '../UI/Image/Image';

import './ListImage.scss';

const ListImage = props => {
  return (
    <section className="ListImage">
      {props.previewImg.map((img, i) => (
        <Image
          key={i + img.id}
          src={props.url_type + img.imageUrl}
          alt={'image-' + i}
          click={() => props.modalImage(img.id)} />
      ))}
    </section>
  );
}

export default ListImage;