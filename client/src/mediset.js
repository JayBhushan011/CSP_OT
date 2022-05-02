import web3 from "./web3";

const address = "0xaa47288B02564be07aEf72cA7C13773E6F2d4a88";

const abi = [
  {
    constant: false,
    inputs: [
      { name: "patientID", type: "address" },
      { name: "medicine", type: "string" },
    ],
    name: "uploadPres",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "manager",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ name: "patientID", type: "address" }],
    name: "getPres",
    outputs: [{ name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ name: "", type: "address" }],
    name: "pres",
    outputs: [{ name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "message",
    outputs: [{ name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ name: "initialMessage", type: "string" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
];

export default new web3.eth.Contract(abi, address);
