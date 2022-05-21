const NodeRSA = require('node-rsa');
const key = new NodeRSA({b: 512});
const {crypto} = require( "./../server")
let value;
const N= key.keyPair.n;
const d = key.keyPair.d;
const e =  key.keyPair.e;
const msg = ["Hello Adi", "Hello Jay"];
const array = new Uint32Array(2)
let x = crypto.webcrypto.getRandomValues(array);

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
function encode(str) {
    return str.replace(/./g, function(c) {
        return ('00' + c.charCodeAt(0)).slice(-3);
    });
}



const c = [ encode(msg[0]), encode(msg[1])];
console.log("Cipher: ", c);
// Format of function to get message 
exports.getMessageFromFrontend = async (req,res,next) => {
    let v = req.body.value;
    console.log(v);
    k = [ c[0] + modExp(v - parseInt(x[0]), d, N), c[1] + modExp(v- parseInt(x[1]), d, N) ]
    value = k;
};

// Format to send 
exports.sendMessageToFrontEnd = async (req,res,next) => {
    res.send(value);
    console.log(value);
};

exports.sendPK = async (req,res,next) => {
    console.log("Key:", key)
    let PK = {
        N: N,
        e: e
    }
    console.log("PK: ", PK);
    
    console.log("RandNum:", x)
    let data = {PK : PK,
    rNum: x
    }
    console.log("rNum arr: ", data.rNum)
    res.send(data);
};


