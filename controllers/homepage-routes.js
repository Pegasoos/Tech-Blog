const router = require('express').Router();
const { User, Post } = require('../models');
//add auth require later

//route to render homepage and blog posts
router.get('/', async (req, res) =>{
    try{
        const allPostData = await Post.findAll();
        const posts = allPostData.map((post) => post.get({ plain: true }));
        res.render('homepage', {posts});
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/post/:id', async (req,res) =>{
    try{
    const postData = await Post.findByPk(req.params.id);
    const post = postData.get({ plain:true });
    res.render('post', {post});
}
catch(err){
    console.log(err);
    res.status(500).json(err);
}
});

router.get('/login', async (req, res) =>{
    res.render('login')//add log in condition later
});
module.exports = router;