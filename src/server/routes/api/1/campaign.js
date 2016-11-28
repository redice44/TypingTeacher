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

  console.log('campaign', campaign);
  if (campaign.students && campaign.students.length > 0) {

    camp.students = campaign.students;
    let q = {
      username: { $in: campaign.students }
    };

    Account.find(q, (err, students) => {
      if (err) {
        console.log(err);
        return next(err);
      }

      console.log('students from teachers camp', students);
      students.forEach((student) => {
        student.campaignList.push(camp._id);
          student.save((err) => {
            if (err) {
              return next(err);
            }
            console.log('saving student', student);
          });
      })
    });
  }

  camp.save((err) => {
    if (err) {
      return next(err);
    }

    Account.findOne({ 'username': req.body.username }, (err, user) => {
      if (err) {
        return next(err);
      }

      user.campaignList.push(camp._id);
      user.save((err) => {
        if (err) {
          return next(err);
        }
        const q = {
          _id: { $in: user.campaignList }
        };

        Campaign.find(q, (err, campList) => {
          if (err) {
            return console.log(err);
          }

          console.log('getting campaigns for user', campList);
          res.json({
            user: {
              name: req.user.username,
              wpm: req.user.wpm,
              acc: req.user.acc,
              campaignList: campList
            }
          });
        });

        //return res.json({user: user});
      });
    });
  });



});

router.get('/test', (req, res, next) => {
  // TODO: Get test account campaigns
});

export default router;
