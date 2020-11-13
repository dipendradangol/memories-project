import express from 'express';

import { getPosts, createPost } from '../controllers/posts.js';

const router = express.Router();

// adding route
router.get('/', getPosts);
router.post('/', createPost);

export default router;