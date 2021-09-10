const mongoose = require("mongoose");

const resumeSchema = mongoose.Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: "Register",
	},
	username: {
		type: String,
		required: true,
		unique: true,
	},
	firstname: {
		type: String,
		required: true,
	},
	lastname: {
		type: String,
	},
	email: {
		type: String,
		required: true,
	},
	phone: {
		type: Number,
	},
	profession: {
		type: String,
		required: true,
	},
	address: {
		type: String,
	},
	intro: {
		type: String,
	},
	skills: [
		{
			_id: false,
			skill: {
				type: String,
			},
			SProficiency: {
				type: String,
			},
		},
	],
	experience: [
		{
			_id: false,
			job: {
				type: String,
			},
			time: {
				type: String,
			},
			company: {
				type: String,
			},
			role: {
				type: String,
			},
		},
	],
	education: [
		{
			_id: false,
			degree: {
				type: String,
			},
			school: {
				type: String,
			},
			year: {
				type: String,
			},
		},
	],
	projects: [
		{
			_id: false,
			title: {
				type: String,
			},
			work: {
				type: String,
			},
			duration: {
				type: String,
			},
		},
	],
	languages: [
		{
			_id: false,
			lang: {
				type: String,
			},
			LProficiency: {
				type: String,
			},
		},
	],
	hobbies: [
		{
			_id: false,
			hobbie: {
				type: String,
			},
		},
	],
});

const Resume = new mongoose.model("resume", resumeSchema);

module.exports = Resume;
