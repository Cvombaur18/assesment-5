const faveDog = require("./db.json")

module.exports = {

    getfaveDog: (req, res) => {
res.status(200).send(faveDog) 
},
deletefaveDog: (req, res) => {
    const { faveDogId } = req.params;
    const tgtIndex = faveDog.findIndex(function(faveDogObj) {
        return faveDogObj.id === parseInt(faveDogId);
    })
    if (tgtIndex ===-1) {
        res.status(404).send('Dog not found!')
    }else {
        faveDog.splice(tgtIndex, 1);
        res.status(200).send(faveDog);
    }
}


}