import express from 'express'
import { testt } from '../controllers/user.controller.js';


const router =express.Router();

router.get('/',testt)

export default router;
