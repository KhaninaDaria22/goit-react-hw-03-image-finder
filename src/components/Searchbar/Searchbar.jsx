import { Component } from "react";

import styles from './Searchbar.module.css'

class Searchbar extends Component {
    state = {
        search: '',
    }
//оновлюємо стейт при наборі символів в інпуті 
    handleChange = ({ target }) => {
        const {name, value} = target;
        this.setState({
            [name]: value
        })
    }

 //зупиняємо оновлення сторінки після натискання на пошук 
     handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit({...this.state});
        this.setState({
            search: ""
        })
    }

//рендемо розмітку
    render() {
        const { handleChange, handleSubmit } = this;
        const {search} = this.state;

        return (
            <header className={styles.searchbar}>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <button type="submit" className={styles.button}>
                        <span className={styles.label}>Search</span>
                    </button>
                    <input
                        name="search"
                        className={styles.input}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        onChange={handleChange}
                        value={search}
                    />
                </form>
            </header>
        )
    }
}

export default Searchbar;


















