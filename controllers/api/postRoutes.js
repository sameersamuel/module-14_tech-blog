const router = require('express').Router();
const { application } = require('express');
const { Post, Comment, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', async (req, res) => {
    try {
        const newPost = await Post.create({
            ...req.body,
            user_id: 1
        })
        res.status(200).json(newPost);
    } catch (err) {
        res.status(500).json(err);
      }
});

module.exports = router;