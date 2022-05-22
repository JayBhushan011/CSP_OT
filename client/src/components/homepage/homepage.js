import { useNavigate } from 'react-router-dom';
import "./homepage.css";


function Homepage(){
  const navigate = useNavigate();

    return (
      <> 
        <h3> Please choose  </h3>
        <button onClick={() => navigate("/OT")}> Oblivious Tranfer Simulation </button>
      </>
    );
  }

export default Homepage;