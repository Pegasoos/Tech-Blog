const router = require('express').Router();
const Post = require('../../models/Post');

router.post('/', async (req, res) =>{
    try{
        const newPost = await Post.create({
            ...req.body,
        });
        res.status(200).json(newPost);
    }
    catch(err){
        res.status(400).json(err);
    }
})

router.delete('/:id', async (req, res) =>{
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
})
module.exports = router;