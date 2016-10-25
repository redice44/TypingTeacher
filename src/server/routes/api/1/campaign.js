import Express from 'express';
let router = Express.Router();

import Campaign from '../../../../database/campaign/model';

const makeCampaign = (req, res, next) => {
  let camp = new Campaign({
    name: 'My Campaign'
  });

  let numLv = Math.floor(Math.random() * 5) + 1;

  for (let i = 0; i < numLv; i++) {
    camp.levels.push({
      wpm: Math.floor(Math.random() * 100),
      acc: Math.floor(Math.random() * 100),
      difficulty: Math.floor(Math.random() * 3)
    });
  }

  console.log(camp);

  camp.save((err) => {
    if (err) {
      return next(err);
    }

    return res.json({campaign: camp});
  });
};

router.get('/', (req, res, next) => {
  // TODO: Get all campaigns, perhaps
});

router.get('/test', (req, res, next) => {
  // TODO: Get test account campaigns
});

router.post('/test', makeCampaign);

export default router;
