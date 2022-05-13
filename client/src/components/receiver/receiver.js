import "./receiver.css"
import React, { useState, useEffect } from "react"
import axios from "axios";


function Receiver(){
    const [otinput, setOTinput] = useState(-1)

    
    
    function handleSubmit(){
        console.log(otinput);
        axios.post('http://localhost:3001/api/main/',{
        "value": otinput,
    });
    }

    function Button(props){

        function handleClick(){
            setOTinput(props.value);
        }
        return(
            <>
            <button onClick={handleClick}> {props.value} </button>
            </>
        );
    }
    return (
      <> 
      <h2> Select input <i> i </i></h2>
      <Button value="0"> 0 </Button>
      <Button value="1"> 1 </Button>
      

      <button type="submit" onClick={handleSubmit}  > Submit </button>


      </>
    );
  }

export default Receiver;