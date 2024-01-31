//взять через імпорт стилі ImagesList
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem'

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