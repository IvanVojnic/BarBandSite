import express from 'express';

import { addUser } from '../controllers/userControl.js';

const router = express.Router();

router.post('/addUser', addUser);

router.use('/', (req, res, next) => {
    res.status(404).json({error : "page not found"});
});

export default router;
