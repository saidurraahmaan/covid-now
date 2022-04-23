import express from 'express'
import {getAllCountry, addNewCountry} from '../controllers/countryController.js'

const router = express.Router();

router.get('/', getAllCountry);
router.post('/add', addNewCountry);


export default router;