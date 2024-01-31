import { Component } from "react";
import Searchbar from "components/Searchbar/SearchbarForm";
import ImageGallery from "components/ImageGallery/ImageGallery";
import Button from "components/Button/Button";


export default class App extends Component {
    state = {
        imgItem: [],
        page: 1,
    };

//оновлення стетйту 
    handleFormSubmit = imgItem => {
        this.setState({imgItem});
    };
//оновлення при натисканні на кнопку (підгружається ще одна сторінка з картинками)
    loadMoreBtnHandler = () => {
        this.setState(prevState => ({ page: prevState.page + 1 }));
      }; 

    render() {
        return (
            <div>
                <Searchbar onSubmit={this.handleFormSubmit} />
                <ImageGallery imgItem={this.state.imgItem}></ImageGallery>
                <Button onLoadMore={this.loadMoreBtnHandler} />
            </div>
        );
    }
}










// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };


