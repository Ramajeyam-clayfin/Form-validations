import React from 'react';
import { Button } from 'react-bootstrap';


const Buttong = (props) => {


		
	return(
        <Button 
            style= {props.style} 
            className = {props.type==='primary'? 'btn btn-primary' : 'btn btn-secondary'}
            onClick= {props.action}  
          >

          {props.title}

        </Button>
    );
}


export default Buttong;