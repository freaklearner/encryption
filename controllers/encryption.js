
const decrypData = (req,res,next) => {
    res.json({message: req.payload});
}


module.exports = {
    decrypData
};