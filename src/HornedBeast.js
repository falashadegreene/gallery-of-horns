import React from 'react';

class HornedBeast extends React.Component {
  render () {
    return (
     <article>
       <h2>{this.props.title}</h2>
       <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" alt="narwhal" title="UniWhal">
       </img>
       <p>A unicorn and a narwhal nuzzling their horns</p>
     </article>
    );
  }
}

export default HornedBeast;