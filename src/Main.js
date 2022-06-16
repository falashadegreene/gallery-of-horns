import React from 'react';
import HornedBeast from './HornedBeast';
import './Main.css';


class Main extends React.Component {
 render () {
  let horns = this.props.data.map((horns,idx) => (
    <HornedBeast 
      title = {horns.title} 
      imageUrl = {horns.image_url} 
      description={horns.description}
      key={idx}
      handleOnShowModal={this.props.handleOnShowModal}
    />
    ));

    return (

      
      <main>
      {horns}
      </main>
      
    );
  }
}

export default Main;