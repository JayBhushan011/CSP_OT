

let value;
exports.getMessage = async (req,res,next) => {
    let {value} = req.body;
    console.log(value);
};