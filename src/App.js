import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer';
import Modal from 'react-bootstrap/Modal'
import data from './data.json';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  };

  handleOnHide = () => {
    this.setState({
      showModal: true
    });
  };

  handleOnShowModal = () => {
    this.setState({
      showModal: true

    });
  };

render() {
  return (
    <>
     
    <Header/>
    <Main
    data={data}
    handleOnShowModal={this.handleOnShowModal}
    />
    <Footer/>
    <Modal 
    show={this.state.showModal}
    onHide={this.handleOnHide}
    >
     <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
    </Modal>
    </>
  );
 }
}

export default App;
