import express from 'express'
import {addNewStates,getAllByCountry,updateStateById,deleteStateById} from '../controllers/statesController.js'

const router = express.Router();

router.get('/', getAllByCountry);
router.post('/add', addNewStates);
router.put('/:id',updateStateById);
router.delete('/:id',deleteStateById);

export default router;