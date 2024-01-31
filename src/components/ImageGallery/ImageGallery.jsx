import { Component} from "react";
import FetchImg from "services/img-api";
// import ImageGalleryPending  from "components/ImageGalleryPending/ImageGalleryPending";
import ImageGalleryListError from "components/ImageGalleryListError/ImageGalleryListError.JSX"
import ImageGallerylist from "components/ImageGalleryList/ImageGalleryList";

//прописуємо статуст при кожному рендері сторінки
const Status = {
    IDLE: 'idle',
    PENDING: 'pending',
    RESOLVED: 'resolved',
    REJECTED: 'REJECTED',
};


export default class ImageGallery  extends Component {
    state = {
        img: null,
        error: null,
        status: Status.IDLE,
    };

   componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.imgItem;
    const nextName = this.props.imgItem;

    if(prevName !== nextName) {
        this.setState({status: Status.PENDING})

        FetchImg
            .fetchImg(nextName)
            //якщо все ок і все оновлюється то ми бачимо результат список карток які нам приходять з арі
            .then(img => this.setState({img, status: Status.RESOLVED}))
            //якщо є помилка ми рендермемо помилку 
            .catch(error => this.setState({error, status: Status.REJECTED}))
    };
   } 

   render() {
    const { img, error, status} = this.state;
    const { imgItem } = this.props;
    
//перевряємо статуси на іф 
    if(status === 'idle') {
        error('Enter the title img');
        return;
    }
//показуємо попередні і загружаємо далі 
    // if(status === 'pending') {
    //     return <ImageGalleryPending imgItem={imgItem} />
    // }
//аоказуємо помилку при ренедері
    if( status === 'rejected') {
        return <ImageGalleryListError message={error.message}/>
    }
 //показуємо результат    
    if(status === 'resolved') {
        return <ImageGallerylist img={img}/>
    }
   }
}

