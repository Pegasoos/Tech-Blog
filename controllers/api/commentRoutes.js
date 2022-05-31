const router = require('express').Router();
const Comment = require('../../models/Comment');

router.post('/', async (req,res) =>{
    try{
        console.log(req.session.username);
    const newComment = await Comment.create({
        body:req.body.body,
        post_id:req.body.post_id,
        commenter: req.session.username,
    });
    res.status(200).json(newComment);
    }
    catch(err){
        res.status(400).json(err);
    }
});

module.exports = router;