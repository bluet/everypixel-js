"use strict";
var fs = require("fs");
var test = require("tape"); // assign the tape library to the variable "test"
var appRoot = require("app-root-path");
const EveryPixel = require(appRoot + "/index.js");

var api = new EveryPixel({
	"username": "<your-client-id>",
	"password": "<your-client-secret>"
});


test("Get 10 suggested keywords of online image", async function (t) {
	var ret = await api.keywords({"url": "http://image.everypixel.com/2014.12/67439828186edc79b9be81a4dedea8b03c09a12825b_b.jpg", "num_keywords": 10});
	console.log(ret.data);
	t.end();
});


test("Get 10 suggested keywords of local image file", async function (t) {
	var ret = await api.keywords({"data": fs.createReadStream(appRoot + "/t/cat.jpg"), "num_keywords": 10});
	console.log(ret.data);
	t.end();
});

test("Get quality score of online image", async function (t) {
	var ret = await api.quality({"url": "http://image.everypixel.com/2014.12/67439828186edc79b9be81a4dedea8b03c09a12825b_b.jpg"});
	console.log(ret.data);
	t.end();
});


test("Get quality score of local image file", async function (t) {
	var ret = await api.quality({"data": fs.createReadStream(appRoot + "/t/cat.jpg")});
	console.log(ret.data);
	t.end();
});

test("Get User-Generated Photo Scoring of online image", async function (t) {
	var ret = await api.quality_ugc({"url": "http://image.everypixel.com/2014.12/67439828186edc79b9be81a4dedea8b03c09a12825b_b.jpg"});
	console.log(ret.data);
	t.end();
});


test("Get User-Generated Photo Scoring of local image file", async function (t) {
	var ret = await api.quality_ugc({"data": fs.createReadStream(appRoot + "/t/cat.jpg")});
	console.log(ret.data);
	t.end();
});

test("Find faces of online image", async function (t) {
	var ret = await api.faces({"url": "https://labs.everypixel.com/api/static/i/estest_sample3.jpg"});
	console.log(ret.data);
	console.log(ret.data.faces);
	t.end();
});


test("Find faces of local image file", async function (t) {
	var ret = await api.faces({"data": fs.createReadStream(appRoot + "/t/face.jpg")});
	console.log(ret.data);
	console.log(ret.data.faces);
	t.end();
});
