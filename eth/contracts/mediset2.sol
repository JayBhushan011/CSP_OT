pragma solidity ^0.4.17;

contract Mediset{

    mapping(address => string) public pres;
    address public manager;
    
    function Mediset() public{
        manager = msg.sender; 
    }

    function uploadPres(string medicine) public {
        pres[msg.sender] = medicine;
    }

    function getPres(address patientID) public view returns (string) {
        return pres[patientID];
    }
}