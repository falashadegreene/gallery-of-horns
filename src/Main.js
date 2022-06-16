import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data.json';
import './Main.css';


class Main extends React.Component {
 render () {
  let horns = data.map((horns,idx) => (
    <HornedBeast 
      title = {horns.title} 
      imageUrl = {horns.image_url} 
      description={horns.description}
      key={idx}
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