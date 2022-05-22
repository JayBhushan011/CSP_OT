import "./receiver.css"
import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Receiver(){

  function modExp(x, y, p)
  {   let res = 1;
      x = x % p;
      if (x == 0)
          return 0;
      while (y > 0)
      { if (y & 1)
              res = (res * x) % p;
          y = y >> 1;
          x = (x * x) % p;
      }
      return res;
  }
  function decode(str) {
    return str.replace(/.{3}/g, function(c) {
        return String.fromCharCode(c);
    });
}
    const [otinput, setOTinput] = useState(-1);
    const [makeVisible, setMakeVisible] = useState(0);
    const navigate = useNavigate();
    let data;
    let N;
    let e;
    let rNum;
    
    async function getPublicKeyFromServer(){
        try{
            data = await axios.get('http://localhost:3001/api/main/getPK');
            data = data.data;
            console.log("Data:", data)
            let PK = data.PK;
            N = PK.N; e = PK.e;
            rNum = data.rNum;
            console.log("got PK from server - " + PK);
            console.log("Got rNum from server- ", rNum);
            return 1;
        } catch(error){
            console.log(error);
            return 0; 
        }
    }
    
    getPublicKeyFromServer();
    const array = new Uint32Array(1);
    let k = window.crypto.getRandomValues(array)[0];
    console.log("K:", k)
    

    async function handleSubmit(){
        console.log(otinput);
        let x_b = rNum[otinput];
        let v = (x_b%N  + modExp(k,e,N) )%N;
        axios.post('http://localhost:3001/api/main/',{
        "value": v,
    });
        try {
            var value = await axios.get('http://localhost:3001/api/main/getMessage');
            value = value.data;
            const msg  = decode((parseInt(value[otinput]) - k).toString());
            console.log("got from server - " + msg);
        }
        catch(error) {
            console.log(error);
        }

        setMakeVisible(1)
    }

    function Button(props){

        function handleClick(){
            setOTinput(props.value);
            console.log(props.value);
        }
        return(
            <>
            <button onClick={handleClick}> {props.value} </button>
            </>
        );
    }

    function RedirectButton(props){
        const handleClick = () => {
            navigate("/realFiles")
        }
        return (
            <>
            <button className="redirect-button" onClick={handleClick}> Now try it with real files </button>
            </>
        )
    }
    return (
      <> 
      <h2> Exploring the protocol </h2>
      <h3> Select input <i> i </i></h3>
      <Button value="0"> 0 </Button>
      <Button value="1"> 1 </Button>
      

      <button type="submit" onClick={handleSubmit}  > Submit </button>

      { makeVisible ? <RedirectButton /> : null}
      </>
    );
  }

export default Receiver;