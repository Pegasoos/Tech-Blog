const router = require('express').Router();
const Comment = require('../../models/Comment');

router.post('/', async (req,res) =>{
    console.log(req.session.username);
    try{
    const newComment = await Comment.create({
        ...req.body,
        commenter: req.session.username,
    });
    res.status(200).json(newComment);
    }
    catch(err){
        res.status(400).json(err);
    }
});

module.exports = router;