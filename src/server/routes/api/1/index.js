import Express from 'express';
import AccountRouter from './account';
import PhraseRouter from './phrase';

let router = Express.Router();

router.use('/account', AccountRouter);
router.use('/phrase', PhraseRouter);

export default router;
