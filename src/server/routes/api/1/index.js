import Express from 'express';
import AccountRouter from './account';
import PhraseRouter from './phrase';
import CampaignRouter from './campaign';

let router = Express.Router();

router.use('/account', AccountRouter);
router.use('/phrase', PhraseRouter);
router.use('/campaign', CampaignRouter);

export default router;
