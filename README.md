# Welcome to EveryPixel API 👋
![Version](https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/BlueT/everypixel-js#readme)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/BlueT/everypixel-js/graphs/commit-activity)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/BlueT/everypixel-js/blob/master/LICENSE)
[![Twitter: BlueT](https://img.shields.io/twitter/follow/BlueT.svg?style=social)](https://twitter.com/BlueT)

JavaScript client support for EveryPixel API, works in both Node.js and Browser.
- Image Keywording
- Stock Photography Scoring
- UGC Photography Scoring
- Age recognition
- <https://labs.everypixel.com/api>

### 🏠 [Homepage](https://github.com/BlueT/everypixel-js#readme)

## Install

```sh
npm i everypixel
```

## Usage

```js
const EveryPixel = require('everypixel');

const api = new EveryPixel({
	"username": "<your-client-id>",
	"password": "<your-client-secret>"
});

// Get 10 suggested keywords of online image
let ret = await api.keywords({"url": "http://image.everypixel.com/2014.12/67439828186edc79b9be81a4dedea8b03c09a12825b_b.jpg", "num_keywords": 10});
console.log(ret.data);
// Get 10 suggested keywords of local image file
let ret = await api.keywords({"data": fs.createReadStream("t/cat.jpg"), "num_keywords": 10});
console.log(ret.data);

```

### keywords
```js
await api.keywords({"url": "http://image.everypixel.com/2014.12/67439828186edc79b9be81a4dedea8b03c09a12825b_b.jpg", "num_keywords": 10});
```

```js
await api.keywords({"data": fs.createReadStream(appRoot + "/t/cat.jpg"), "num_keywords": 10});
```

### quality
```js
await api.quality({"url": "http://image.everypixel.com/2014.12/67439828186edc79b9be81a4dedea8b03c09a12825b_b.jpg"});
```

```js
await api.quality({"data": fs.createReadStream(appRoot + "/t/cat.jpg")});
```

### quality_ugc
```js
await api.quality_ugc({"url": "http://image.everypixel.com/2014.12/67439828186edc79b9be81a4dedea8b03c09a12825b_b.jpg"});
```

```js
await api.quality_ugc({"data": fs.createReadStream(appRoot + "/t/cat.jpg")});
```

### faces
```js
await api.faces({"url": "https://labs.everypixel.com/api/static/i/estest_sample3.jpg"});
```

```js
await api.faces({"data": fs.createReadStream(appRoot + "/t/face.jpg")});
```

## Run tests
Because EveryPixel doesn't provide free test account, you need to signup at https://labs.everypixel.com/api and get your client tokens with 100 daily free quota of api calls.

Please modify `t/test.js` and update your token info BEFORE running test.

```sh
npm run test
```

## Author

👤 **BlueT - Matthew Lien - 練喆明 &lt;BlueT@BlueT.org&gt;**

* Twitter: [@BlueT](https://twitter.com/BlueT)
* Github: [@BlueT](https://github.com/BlueT)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/BlueT/everypixel-js/issues).

## Show your support

Give a ⭐️ if this project helped you!

[![support us](https://img.shields.io/badge/become-a%20patreon%20us-orange.svg?cacheSeconds=2592000)](https://www.patreon.com/bluet)


## 📝 License

Copyright © 2019 [BlueT - Matthew Lien - 練喆明 &lt;BlueT@BlueT.org&gt;](https://github.com/BlueT).

This project is [MIT](https://github.com/BlueT/everypixel-js/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
