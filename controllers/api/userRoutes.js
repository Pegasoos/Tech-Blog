const router = require('express').Router();
const User = require('../../models/User');

//route for creating a new user
router.post('/', async (req, res) =>{
try{
const newUser = await User.create(req.body);
req.session.save(() => {
    req.session.user_id = newUser.id;
    req.session.logged_in = true;
    req.session.username = newUser.username

    res.status(200).json(newUser);
})

} catch (err){
    res.status(400).json(err);
}
});
//route for login
router.post('/login', async (req, res) =>{
try{
    const userData = await User.findOne({ where: {username:req.body.username} });
    console.log(userData)
    if(!userData){
        res.status(400).json({message:"Incorrect Username or Password!"});
        return
    }
    const validPassword = await userData.checkPassword(req.body.password);
    if(!validPassword){
        res.status(400).json({message:"Incorrect Username or Password!"});
        return
    }
    req.session.save(() =>{
        req.session.user_id = userData.id;
        req.session.username = userData.username;
        req.session.logged_in = true;

        res.json({message:'You are now logged in!'});
    })
}
catch (err){
res.status(400).json(err)
};
});

router.post('/logout', (req, res) =>{
    if(req.session.logged_in){
        req.session.destroy(()=>{
            res.json({message:'You are now logged out!'})
            res.status(204).end();
        })
    }
    else{
        res.status(404).end();
    }
});
module.exports = router;