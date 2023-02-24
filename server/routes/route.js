const express = require('express');
const router = express.Router();
import { savingQueriesInDatabase, findWithContactName, findAllUsers, findWithWebsiteName } from '../controllers/enquiries';

router.post('/enquiries', savingQueriesInDatabase);
router.get('/users', findAllUsers);
router.get('/enquiries/:contactName', findWithContactName);
router.get('/enquiries/:websiteName', findWithWebsiteName);

export default router;
