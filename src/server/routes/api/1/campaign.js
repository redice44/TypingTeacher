import Express from 'express';
let router = Express.Router();

import Campaign from '../../../../database/campaign/model';
import Account from '../../../../database/account/model';

router.get('/', (req, res, next) => {
  // TODO: Get all campaigns, perhaps
});

router.post('/add', (req, res, next) => {
  let campaign = req.body.campaign;
  let camp = new Campaign({
    name: campaign.name
  });

  for (let i = 0; i < campaign.levels.length; i++) {
    camp.levels.push(campaign.levels[i]);
  }


  camp.save((err) => {
    if (err) {
      return next(err);
    }

    Account.findOne({ 'username': req.body.username }, (err, user) => {
      if (err) {
        return next(err);
      }

      console.log('found test user', user);

      user.campaignList.push(camp._id);
      user.save((err) => {
        if (err) {
          return next(err);
        }
        console.log('Updated test user');
        return res.json({campaign: camp});
      });
    });
  });
});

router.get('/test', (req, res, next) => {
  // TODO: Get test account campaigns
});

export default router;
