import React from 'react';


// co the dung function component vi khong can su dung state hoac lifecycle method

class Objective extends React.Component{
  constructor(props){
    super(props);

  };

  render(){
    return(
      <div class='Objective'>
        <h3 class="heading-3">//OBJECTIVE</h3>
        <div class="row">
          <p>Take advantages of Web Developer to become a professional front-end developer and bring value to customers.
            From that, I will contribute to front-end development of your company.</p>
        </div>
      </div>
    )
  };
}

export default Objective;