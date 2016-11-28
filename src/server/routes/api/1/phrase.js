import Express from 'express';
import Phrase from '../../../../database/phrase/model';
let router = Express.Router();

router.get('/', (req, res, next) => {
  Phrase.count((err, count) => {
    let rand = Math.floor(Math.random() * count);
    Phrase.findOne().skip(rand).exec((err, p) => {
      if (err) {
        console.log(err);
        return next(err);
      }
      console.log(p);
      res.json({
        phrase: p.phrase
      });
    });

  });
});

router.post('/add', (req, res, next) => {
  console.log(req.body);
  let phrase = new Phrase({
    phrase: req.body.phrase
  });

  phrase.save((err) => {
    if (err) {
      console.log(err);
      return next(err);
    }
    res.json({
      success: true
    });
  });
});

export default router;
