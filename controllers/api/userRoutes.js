const router = require('express').Router();
const User = require('../../models/User');
//route for creating a new user
router.post('/', async (req, res) =>{
try{
const newUser = await User.create(req.body)
res.status(200).json(newUser);
}
catch (err){
    res.status(400).json(err);
}
});
module.exports = router;