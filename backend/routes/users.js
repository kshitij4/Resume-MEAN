var express = require("express");
var router = express.Router();
const bcrypt = require("bcryptjs");
const Register = require("../Models/register");
const verifyToken = require("../middleware/authenticate");

router.post("/register", async (req, res) => {
	try {
		const register = new Register({
			firstname: req.body.fname,
			lastname: req.body.lname,
			email: req.body.email,
			gender: req.body.gender,
			phone: req.body.phone,
			age: req.body.age,
			password: req.body.pass,
		});
		const token = await register.generateToken();

		const data = await register.save();
		res.status(201).json("Registered Successfully");
	} catch (error) {
		res.status(404).json(error);
	}
});

router.post("/login", async (req, res) => {
	try {
		const email = req.body.email;
		const pass = req.body.pass;
		const RegisterData = await Register.findOne({ email });
		const isMatch = await bcrypt.compare(pass, RegisterData.password);
		if (isMatch) {
			const token = await RegisterData.generateToken();
			res.status(201).json(token);
		} else {
			res.status(400).json("Email or password incorrect");
		}
	} catch (error) {
		res.status(400).json("Email or password incorrect");
	}
});

router.get("/profile", verifyToken, async (req, res) => {
	try {
		data = await Register.findOne({ _id: req.userId });
		res.status(201).json(data);
	} catch (error) {
		res.status(500).json(error);
	}
});

router.patch("/profile", verifyToken, async (req, res) => {
	try {
		await Register.findByIdAndUpdate(req.userId, req.body);
		res.status(200).json("Profile Updated Successfully");
	} catch (error) {
		res.status(500).json(error);
	}
});

module.exports = router;
