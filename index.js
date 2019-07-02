"use strict";

const axios = require("axios");
const FormData = require("form-data");
const { promisify } = require("util");

const BASE_URL = "https://api.everypixel.com/v1";
const ENDPOINTS = {
	keywords: "/keywords",
	quality: "/quality",
	quality_ugc: "/quality_ugc",
	faces: "/faces",
};


function EveryPixel(auth = { username: "", password: "" }) {
	this.client = axios.create({
		baseURL: BASE_URL,
		auth: auth || {},
	});

	return new Proxy(this, {
		get: function(target, key, receiver) {
			console.log(`getting ${key}!`);
			const client = Reflect.get(target, "client", receiver);

			return async function(params) {
				if (params.url) {
					return await client.get(ENDPOINTS[key], {
						params: params,
					});
				} else if (params.data) {
					const form = new FormData();
			
					form.append("data", params.data);
					delete params.data;
					const headers = await getFormHeaders(form);
			
					return await client.post(ENDPOINTS[key], form, {headers: headers, params: params});
				}
			};
		},
	});
}


// Borrow from https://github.com/chux0519/axios-request for getting Content-Length
async function getFormHeaders(form) {
	const getLen = promisify(form.getLength).bind(form);
	const len = await getLen();
	return {
		...form.getHeaders(),
		"Content-Length": len,
	};
}

module.exports = EveryPixel;
