import React from 'react';
import HornedBeast from './HornedBeast';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Main.css';



class Main extends React.Component {
 render () {
  let horns = this.props.data.map((horns,idx) => (
    <HornedBeast 
      title = {horns.title} 
      imageUrl = {horns.image_url} 
      description={horns.description}
      key={horns._id}
      horns={horns}
      handleOnShowModal={this.props.handleOnShowModal}
    />
    ));

    return (
      <main>
    <Form onSubmit={this.handleSubmit}>
      <Form.Group>
        <Form.Select onChange={this.handleChange}>
            <option value="all">all</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="100">100</option>     
        </Form.Select>
      </Form.Group>
      <Button type="submit">submit</Button>
    </Form>
      
      {horns}
      </main>
      
    );
  }
}

export default Main;