import express from 'express';

import { getPosts, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js';

const router = express.Router();

// adding route
// update route, patch is use for updating existing documents (also for like post)

router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);

export default router;