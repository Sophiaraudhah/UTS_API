import express from 'express';

import {getHotels, addHotel, getHotelbyId, getHotelbyStar, getRoomfromHotel, updateHotel} from '../controllers/hotels.js';

const router = express.Router();

router.get('/', getHotels);

router.post('/', addHotel);

router.get('/:id', getHotelbyId);

router.get('/star/:star', getHotelbyStar);

router.get('/room/:id', getRoomfromHotel);

router.patch('/:id', updateHotel);

export default router;