const router = require('express').Router();
const Post = require('../../models/Post');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) =>{
    try{
        const newPost = await Post.create({
            ...req.body,
            poster: req.session.username,
            poster_id: req.session.user_id,
        });
        res.status(200).json(newPost);
    }
    catch(err){
        res.status(400).json(err);
    }
});

router.put('/:id', withAuth, async (req, res) =>{
    try{
        const post = await Post.findOne({where:{id:req.params.id}});
        const updatedPost = await post.update({
            ...req.body,
            poster: req.session.username,
            poster_id: req.session.user_id,
        });
        res.status(200).json(updatedPost);
    }
    catch (err){
        res.status(400).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) =>{
    try{
        const postData = await Post.destroy({
            where: {
                id:req.params.id
            }
        });
    if(!postData){
        res.status(404).json({message: 'No post found with this id!'});
        return
    }
    res.status(200).json(postData);
    }
    catch(err){
        res.status(400).json(err);
    }
});
module.exports = router;