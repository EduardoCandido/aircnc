const User = require('../model/Spot');
const Spot = require('../model/Spot');

module.exports = {

    async index(req, res){
        const { tech } = req.query;

        const spots = await Spot.find({ techs: tech });

        return res.json(spots);
    },

    async store(req, res){
        const {filename} = req.file;
        const { company, techs, price } = req.body;
        const { user_id } = req.headers; 
        
        
        const spot = await Spot.create({
        user: user_id,
        thumbnail: filename,
        techs: techs.split(',').map(tech => tech.trim()),
        company,
        price
        });

        return res.json(spot);
        

        
    },

    async destroy(req, res){
        const {spot_id} = req.params;

        const spot = await Spot.deleteOne({_id: spot_id});
    }
}