import express from 'express';

import { getPosts, createPost, updatePost } from '../controllers/posts.js';

const router = express.Router();

// adding route
// update route, patch is use for updating existing documents

router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost)

export default router;