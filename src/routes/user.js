import { Router } from 'express';

import { create } from '../controllers/user';

const rt = Router();

rt.post('/', create);

export default rt;