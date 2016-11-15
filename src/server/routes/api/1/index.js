import Express from 'express';
import AccountRouter from './account';
import PhraseRouter from './phrase';
import CampaignRouter from './campaign';

import StatisticsRouter from './stats';

let router = Express.Router();

router.use('/account', AccountRouter);
router.use('/phrase', PhraseRouter);
router.use('/campaign', CampaignRouter);

router.use('/stats', StatisticsRouter);

export default router;