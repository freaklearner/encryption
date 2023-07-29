const { decrypt } = require('../utilities/cryptoService');

const decrypData = (req,res,next) => {
    //data validation can be done in validation middleware before reaching this controller
   //error handling can be done in error handling middleware
    res.json({message: req.payload});
}

// const decryptBody = (req,res,next) => {
//     //data validation can be done in validation middleware before reaching this controller
//     //error handling can be done in error handling middleware
//     const cipher = req.body.cipher;
//     const payload = decrypt(cipher);
//     res.json({message: payload});
// }

module.exports = {
    decrypData,
    decryptBody
};