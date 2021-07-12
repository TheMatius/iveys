import { Router } from 'express';

import offerRouter from './offer';
import userRouter from './user';

const rt = Router();

rt.use('/api/v1/oferta', offerRouter);
rt.use('/api/v1/usuario', userRouter);

export default rt;