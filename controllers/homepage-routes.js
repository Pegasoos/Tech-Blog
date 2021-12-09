const router = require('express').Router();
const { User, Post } = require('../models');
const withAuth = require('../utils/auth');

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
//route to render individual posts
router.get('/post/:id', withAuth, async (req, res) =>{
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
//route to find posts by poster id and render to dashboard
router.get('/dashboard', withAuth,  async (req, res) =>{
try{
//return after sessions set up
}
catch(err){
res.status(500).json(err);
}
})
//route to render login/logout page
router.get('/login', async (req, res) =>{
    res.render('login')//add log in condition later
});
module.exports = router;