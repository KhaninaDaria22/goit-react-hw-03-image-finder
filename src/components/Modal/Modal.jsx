
import React, { Component } from 'react';
import { ModalItem, Overlay } from './Modal.styled';

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.escapeHandler);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.escapeHandler);
  }

  escapeHandler = e => {
    e.code === 'Escape' && this.props.onClose();
  };

  render() {
    const { largeImg, onClose } = this.props;
    return (
      <Overlay className="overlay" onClick={onClose}>
        <ModalItem className="modal">
          <img src={largeImg} alt="info" />
        </ModalItem>
      </Overlay>
    );
  }
}

export default Modal;