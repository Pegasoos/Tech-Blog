const router = require('express').Router();
const { User, Post } = require('../models');
//add auth require later

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
module.exports = router;