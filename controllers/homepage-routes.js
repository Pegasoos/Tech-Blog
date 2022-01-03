const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

//route to render homepage and blog posts
router.get('/', async (req, res) =>{
    try{
        const allPostData = await Post.findAll();
        const posts = allPostData.map((post) => post.get({ plain: true }));
        res.render('homepage', {
            posts,
            logged_in:req.session.logged_in
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});
//route to render individual posts with their comments
router.get('/post/:id', withAuth, async (req, res) =>{
    try{
    const postData = await Post.findOne({where:{id:req.params.id}});
    const post = postData.get({ plain:true });

    const commentData = await Comment.findAll({where:{post_id:req.params.id}});
    const comments = commentData.map((comment) => comment.get({ plain:true }));

    res.render('post', {
        post,
        comments,
        logged_in:req.session.logged_in
    });
}
catch(err){
    console.log(err);
    res.status(500).json(err);
}
});
//route to find posts by poster id and render to dashboard
router.get('/dashboard', withAuth, async (req, res) =>{
try{
const userPostData = await Post.findAll({
    where:{
        poster_id : req.session.user_id
    }
});
const userPosts = userPostData.map((post) => post.get({ plain:true }));
res.render('dashboard', {
    userPosts,
    logged_in: req.session.logged_in
});
}
catch(err){
    res.status(500).json(err);
}
});
//route to render login/logout page
router.get('/login', async (req, res) =>{
    if(req.session.logged_in){
        res.redirect('/dashboard');
        return
    }
    res.render('login')
});
module.exports = router;