import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer';
//import Modal from 'react-bootstrap/Modal';
import data from './data.json';
import './App.css';
import SelectedBeast from './SelectedBeast.js';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      pickedHorns: {}
      
    };
  };

  handleOnHide = () => {
    this.setState({
      showModal: false
    });
  };

  handleOnShowModal = (name) => {
    console.log('hello OnshowModal');
   let pickedHorns = data.find(beast => beast.title === name );

    this.setState({
      showModal: true,
      pickedHorns

    });
  };
  
  render() {
    console.log(this.state.pickedHorns);
    console.log(this.state.showModal);
    return (
    <>
     
    <Header/>
    <Main
    data={data}
    handleOnShowModal={this.handleOnShowModal}
    handleOnHide= {this.handleOnHide}
    />
    
  
    <SelectedBeast 
    showModal={this.state.showModal}
    onHide={this.handleOnHide}
    pickedHorns={this.state.pickedHorns}
    />
 <Footer/>
    </>
  );
 }
}

export default App;
