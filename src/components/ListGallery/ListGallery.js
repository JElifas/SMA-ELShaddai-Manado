import Image from '../UI/Image/Image';

import './ListGallery.scss';

const ListGallery = props => {
  return (
    <section className="Gallery">
      {props.previewImg.map((img, i) => (
        <Image
          key={i + img.id}
          src={img.imageUrl}
          alt={'image-' + i}
          click={() => props.modalImage(img.id)} />
      ))}
    </section>
  );
}

export default ListGallery;