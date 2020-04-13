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
				res.json({success: true, message: "Car added", id: id, car})
			})
			.catch(error => {
				res.status(500).json({success: false, message: "Unable to add car", error})
			})
	});


router
	.route('/:id')
	.get((req, res) => {
		const id = req.params;
		db('cars')
			.where(id)
			.first()
			.then(car => {
				car
					? res.json({success: true, message: "Car found", car})
					: res.status(400).json({success: false, message: "Car not found"})
			})
			.catch(error => {
				res.status(500).json({success: false, message: "Unable to retrieve car", error})
			})
	})
	.put((req, res) => {
		const id = req.params;
		const updates = req.body;
		db('cars')
			.where(id)
			.update(updates)
			.then(count => {
				count > 0
					? res.json({success: true, message: "Car updated"})
					: res.status({success: false, message: "Car not updated"})
			})
			.catch(error => {
				res.status(500).json({success: false, message: "Unable to update car", error})
			})
	})
	.delete((req, res) => {
		const id = req.params;
		db('cars')
			.where(id)
			.del()
			.then(count => {
				count > 0
					? res.json({success: true, message: "Car removed"})
					: res.status({success: false, message: "Car not removed"})
			})
			.catch(error => {
				res.status(500).json({success: false, message: "Unable to remove car", error})
			})
	});

module.exports = router;
