import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./usepres.css"
import web3 from "../../web3"
import mediset from "../../mediset"

function UsePrescription(){

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [plusSign, setPlusSign] = useState(0);

    const [message,setMessage] = useState();

    const onSubmit = async (event) => {
      console.log(event); 
      async function getMessage(){

        const message = await mediset.methods.getPres(event.PatientID).call();
        setMessage(message);
        console.log(message);
      }
      getMessage();
    }


    


    return (
    <>
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&display=swap" rel="stylesheet" /> 

    <div className="container">
    <form className="form-class" onSubmit={handleSubmit(onSubmit)}>
    <p className="welcome-p"> Enter Patient ID </p>

    <input className="input-class" defaultValue="Patient ID" {...register("PatientID", {required: true})} /><br />
    {errors.PatientID && <span className="span-errors">This field is required</span>}


    <input className="input-class" type="submit" value="Request Prescription" /><br />

    <h1> {message} </h1>

    
    </form>

      <div className="drops">
        <div className="drop drop-1"></div>
        <div className="drop drop-2"></div>
        <div className="drop drop-3"></div>
        <div className="drop drop-4"></div>
        <div className="drop drop-5"></div>
      </div>
    </div>
   
    
    </>
  );
}

export default UsePrescription;