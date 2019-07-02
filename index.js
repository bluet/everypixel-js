"use strict";

const axios = require("axios");
const FormData = require("form-data");
// const fs = require("fs");
const {promisify} = require("util");


// const qs = require('qs');


const BASE_URL = "https://api.everypixel.com/v1";
const ENDPOINTS = {
	"keywords": "/keywords",
	"quality": "/quality",
	"quality_ugc": "/quality_ugc",
	"faces": "/faces",
};


function EveryPixel (auth = {"username": "", "password": ""}) {

	// console.log(auth);

	this.client = axios.create({
		"baseURL": BASE_URL,
		"auth": auth || {},
	});
}


EveryPixel.prototype.keywords = async function(params) {

	if (params.url) {

		return (await this.client.get(ENDPOINTS.keywords, {"params": params})).data;

	} else if (params.data) {
		const form = new FormData();

		form.append("data", params.data);
		const headers = await getFormHeaders(form);
		
		return await this.client.post(ENDPOINTS.keywords, form, {headers: headers});
	}
};


// Borrow from https://github.com/chux0519/axios-request for getting Content-Length
async function getFormHeaders (form) {
	const getLen = promisify(form.getLength).bind(form);
	const len = await getLen();
	return {
	  ...form.getHeaders(),
	  "Content-Length": len
	};
}


module.exports = EveryPixel;
