const express = require('express');
const router = express.Router();
import { user } from '../controllers/user';

router.post('/user', user);

export default router;