import { Component } from "react";
import { toast } from 'react-toastify';
import { ImSearch } from 'react-icons/im';



export default class Searchbar extends Component {
    state = {
        imgItem: '',
    }
//оновлюємо стейт при наборі символів в інпуті 
    handleNameChange = e => {
        this.setState({imgItem: e.currentTarget.value.toLowerCase()});
    };

 //зупиняємо оновлення сторінки після натискання на пошук 
    handleSubmit = e => {
        e.preventDefault();

 //перевіряємо якщо пошукова строка пуста то виводимо помилку 
    if(this.state.imgItem.trim() === '') {
        toast.error('Enter the title img');
        return;
    }
//чистимо пошук за собою, оновлюємо 
    this.props.onSubmit(this.state.imgItem);
    this.setState({imgItem: ''});
    };
//рендемо розмітку
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                    type='text'
                    name='imgItem'
                    value={this.state.imgItem}
                    onChange={this.handleNameChange}
                />
                <button type="submit">
                    <ImSearch style={{marginLeft: 10}} />
                    
                </button>
            </form>
        );
    }
}




















