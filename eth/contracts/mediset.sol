pragma solidity ^0.4.17; //version of solidity

contract Inbox {
    string public message; //variable is persisted on blockchain
   
    mapping(address => string) public pres;
    address public manager;


    
    function Inbox(string initialMessage) public{ //construtor functions
        message = initialMessage;
    }


    function uploadPres(address patientID, string medicine) public {
        pres[patientID] = medicine;
    }

    function getPres(address patientID) public view returns (string) {
        return pres[patientID];
    }


}
