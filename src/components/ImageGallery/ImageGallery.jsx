import styles from "./ImageGallery.module.css"; 
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({showModal, items }) => {
    const elements = items.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            showModal={showModal}
        />
    ));

    return(
        <ul className={styles.list}>
            {elements}
        </ul>
    );
};
  
  
  export default ImageGallery;