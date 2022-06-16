import React from 'react';
import './HornedBeast.css';



class HornedBeast extends React.Component {
     constructor(props) {
       super(props);
       this.state = {
         favorites: 0
       };
     };
    
     handleFavorites = () => {
       this.setState({
         favorites: this.state.favorites + 1
       });
     };
     


    render () {
      return (
        
          <>
        
          <article>
            <h2>{this.props.title}</h2>
            <img onClick={this.handleFavorites} src={this.props.imageUrl} alt={this.props.description} title={this.props.title}/>
            <p>{this.props.description}</p>
            <p> ❤️ {this.state.favorites} Favorites</p>
          </article>
      
          </>
        );
      }
    }

export default HornedBeast;


