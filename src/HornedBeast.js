import React from 'react';
import './HornedBeast.css';



class HornedBeast extends React.Component {
     constructor(props) {
       super(props);
       this.state = {
         favorites: 0,
       };
     };
    
     handleFavorites = () => {
       this.setState({
         favorites: this.state.favorites + 1
       });
      // this.props.handleOnShowModal(this.props.title);
       
     };

     
     


    render () {
      return (
        
          <>
        
          <article>
            <h2>{this.props.title}</h2>
            <img onClick={this.props.showModal}src={this.props.imageUrl} alt={this.props.description} title={this.props.title}/>
            <p>{this.props.description}</p>
            <button onClick={this.handleFavorites}> ❤️ {this.state.favorites} Favorites</button>
          </article>
      
          </>
        );
      }
    }

export default HornedBeast;


