import React from 'react';
import './HornedBeast.css';



class HornedBeast extends React.Component {
     constructor(props) {
       super(props);
       this.state = {
         favorites: 0,
         count: 0,
       };
     };
    
     handleFavorites = () => {
       this.setState({
         favorites: this.state.favorites + 1
       });
      this.props.handleOnShowModal(this.props.title);  
     };

     likeMe = () => {
      let newCount = this.state.count + 1
      this.setState({
        count: newCount
      })
    }
     


    render () {
      return (
        
          <>
        
          <article>
            <h2>{this.props.title}</h2>
            <img onClick={this.handleFavorites} src={this.props.imageUrl} alt={this.props.description} title={this.props.title}/>
            <p>{this.props.description}</p>
            <button onClick={this.likeMe}> ❤️ {this.state.count} Favorites</button>
          </article>
      
          </>
        );
      }
    }

export default HornedBeast;


