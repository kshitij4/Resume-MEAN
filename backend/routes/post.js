var express = require("express");
var router = express.Router();
const Resume = require("../Models/resume");
const verifyToken = require("../middleware/authenticate");

router.post("/submit", verifyToken, async (req, res) => {
	try {
		const resume = new Resume({
			userId: req.userId,
			username: req.body.username,
			firstname: req.body.firstname,
			lastname: req.body.lastname,
			email: req.body.email,
			phone: req.body.phone,
			profession: req.body.profession,
			address: req.body.address,
			intro: req.body.intro,
			skills: req.body.skills,
			experience: req.body.experience,
			education: req.body.education,
			projects: req.body.projects,
			languages: req.body.languages,
			hobbies: req.body.hobbies,
		});

		const data = await resume.save();
		res.status(201).json("Resume created Successfully");
	} catch (err) {
		console.log(err);
		res.status(404).json(err);		
	}
});

router.get("/resume/:username", verifyToken, async (req, res) => {
	try {
		data = await Resume.findOne({ username: req.params.username });
		if (JSON.stringify(data.userId) === JSON.stringify(req.userId)) {
			res.status(201).json(data);
		} else {
			res.status(401).json("Not authorised to access resume!!");
		}
	} catch (error) {
		res.status(500).json(error);
	}
});

module.exports = router;
