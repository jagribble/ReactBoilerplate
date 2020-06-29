import express from 'express';
import fs from 'fs';
import env from 'dotenv';

env.config();

const router = express.Router();


/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'React Boilerplate',
    shortDescription: 'React Boilerplate',
    image: 'https://images.ctfassets.net/z8eeiao1aitz/5abE6mC4xnZhIQ2fPQKWug/24b4362269f511d13a98fe0b2ae078b6/fullsizeoutput_39a.jpeg',
    authorName: 'Jules Gribble',
    authorTwitter: '@jagribble',
    url: 'https://jules-gribble.co.uk',
  });
});

router.get('/progressive/image/:image', function (req, res) {
  res.type('image/png');
  fs.createReadStream(`./public/images/${req.params.image}`).pipe(res);
});


router.use(function (req, res) {
  res.render('index', {
    title: 'React Boilerplate',
    shortDescription: 'React Boilerplate',
    image: 'https://images.ctfassets.net/z8eeiao1aitz/5abE6mC4xnZhIQ2fPQKWug/24b4362269f511d13a98fe0b2ae078b6/fullsizeoutput_39a.jpeg',
    authorName: 'Jules Gribble',
    authorTwitter: '@jagribble',
    url: 'https://jules-gribble.co.uk',
  });
});

module.exports = router;
