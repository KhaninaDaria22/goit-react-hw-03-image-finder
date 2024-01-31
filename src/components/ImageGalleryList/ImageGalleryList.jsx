//взять через імпорт стилі ImagesList
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem'
import { ImagesList } from 'components/ImageGalleryList/ImageGalleryList.styled';


const ImageGallerylist = ({images}) => {
  return (
    <ImagesList className="gallery">
      {images.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          smallImg={webformatURL}
          largeImg={largeImageURL}
        />
      ))}
    </ImagesList>
  );
}


export default ImageGallerylist;