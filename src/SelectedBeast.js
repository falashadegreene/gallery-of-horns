import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

class SelectedBeast extends React.Component {

  render() {
    console.log(this.props.pickedHorns);
    return(
      
      <Modal show={this.props.showModal} onHide={this.props.onHide}>
        
      <Modal.Header closeButton>
        {this.props.pickedHorns.title}
        </Modal.Header>
       <Image src={this.props.pickedHorns.image_url} alt={this.props.pickedHorns.title}/>

       <Modal.Body>{this.props.pickedHorns.description}</Modal.Body>

       <Modal.Footer>
         <Button onClick={this.props.onHide}>Close</Button>
       </Modal.Footer>

      </Modal>
    );

  }
}

export default SelectedBeast;