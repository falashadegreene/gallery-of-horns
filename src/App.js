import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer';
import Modal from 'react-bootstrap/Modal';
import data from './data.json';
import './App.css';
import SelectedBeast from './SelectedBeast.js';
import 'bootstrap/dist/css/bootstrap.min.css';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      pickedHorns: {},
      sortedData: data,
      selectHorn: ''

    };
  };

  handleChange = event => {
    this.setState({
      seletHorn: event.target.value

    });
  }

  handleOnHide = () => {
    this.setState({
      showModal: false
    });

  };

  handleOnShowModal = (name) => {
    console.log('hello OnshowModal');
    let pickedHorns = data.find(beast => beast.title === name);

    this.setState({
      showModal: true,
      pickedHorns

    });
  };

  sortData = (event) => {
    let selected = event.target.value;

    if (selected) {
      let newData = data.filter(beast => beast.horns === 1);
      this.setState({
        sortedData: newData
      });
      } else if (selected === '2') {
        let newData = data.filter(num => num.horns === 2);
        this.setState({
          sortedData: newData
        });
      } else if (selected === '3') {
        let newData = data.filter(num => num === 3);
        this.setState({
          sortedData: newData
        });

      } else if (selected === 'other') {
        let newData = data.filter(num => num > 3 || num < 1);
        this.setState({
          sortedData: newData
        });
    } else {
      this.setState({
        sortedData: data
      });
    }
  }



  render() {
    console.log(this.state.pickedHorns);
    console.log(this.state.showModal);
    return (
      <>

        <Header />
        <Main
          handleChange={this.handleChange}
          sortData={this.sortData}
          data={this.state.sortedData}
          handleOnShowModal={this.handleOnShowModal}
          handleOnHide={this.handleOnHide}
        />


        <SelectedBeast
          showModal={this.state.showModal}
          onHide={this.handleOnHide}
          pickedHorns={this.state.pickedHorns}
        />
        <Footer />
      </>
    );
  }
}

export default App;
