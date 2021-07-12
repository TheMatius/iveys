import { Router } from 'express';
// Controller
import { create } from '../controllers/offer';
// Middlewares
import validateOffer from '../middlewares/validateOffer';

const rt = Router();

rt.post('/', validateOffer, create);

export default rt;