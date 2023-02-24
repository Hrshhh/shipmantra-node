const express = require('express');
const router = express.Router();
import { savingQueriesInDatabase } from '../controllers/enquiries';

router.post('/enquiries', savingQueriesInDatabase);

export default router;