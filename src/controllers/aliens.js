/* eslint-disable new-cap */
import express from 'express';
const router = module.exports = express.Router();
import Alien from '../models/alien';

router.get('/', (req, res) => {
  const aliens = Alien.find();
  //console.log ('Aliens' , aliens);
  res.render('aliens/index', { aliens });
});

router.get('/new', (req, res) => {
  res.render('aliens/new');
});

router.get('/:id', (req, res) => {
  const alien = Alien.find(req.params.id);
  res.render('aliens/show', { alien });
});

router.post('/', (req, res) => {
  const alien = new Alien(req.body);
  alien.save();
  res.redirect('/aliens');
  //res.render('/aliens');
});
