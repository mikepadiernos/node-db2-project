const express = require('express');
const router = express.Router();
const db = require('../../data/db-config');

router
	.route('/')
	.get((req, res) => {
		db('cars')
			.then(cars => {
				res.json(cars)
			})
			.catch(error => {
				res.status(500).json({success: false, message: "Unable to retrieve cars", error})
			})
	})
	.post((req, res) => {
		const car = req.body;
		db('cars')
			.insert(car)
			.then(id => {
				console.log("account: ",id);
				res.json({success: true, message: "Account added", id: id, car})
			})
			.catch(error => {
				res.status(500).json({success: false, message: "Unable to add account", error})
			})
	});

module.exports = router;
