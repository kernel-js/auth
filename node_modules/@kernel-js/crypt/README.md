# @kernel-js/crypt<br />
[![Build Status](https://travis-ci.org/kernel-js/crypt.svg?branch=master)](https://travis-ci.org/kernel-js/crypt)
[![Coverage Status](https://coveralls.io/repos/github/kernel-js/crypt/badge.svg?branch=master)](https://coveralls.io/github/kernel-js/crypt?branch=master)
<br />

## Inspirations

The main inspiration on my work is PHP Laravel Framework which I love because of its simplicity and beauty of code.

## Why

First of all I created this to support development of [Kernel Framework](https://www.npmjs.com/package/@kernel-js/framework).<br />
Just like the rest of the packages that make up the framework, I make the most of other existing libraries that are well 
tested on a day-to-day basis. The idea is not to reinvent the wheel, just join the ideas in a lightweight framework 
(the focus is on the client side), simple to use and make the code on the front more beautiful and organized. 

## Install
```npm install @kernel-js/crypt```

## Helpers

### Custom

* [encrypt](#encrypt)
* [decrypt](#decrypt)
* [encryptWithHmac](#encryptWithHmac``)
* [decryptWithHmac](#decryptWithHmac)
* [encryptWithTSValidation](#encryptWithTSValidation)
* [decryptWithTSValidation](#decryptWithTSValidation)

<br />
<a name="encrypt" /></a>

### encrypt

Encrypts a string using aes-256-cbc algorithm.

	encrypt(value, password)

__Arguments__

* `value` - the value to encrypt
* `password` - the password used to encrypt and decrypt (keep it safe)

```js
// Examples
env('My secret text', 'My strong password');
```

---------------------------------------

## Authors

This library was developed by Gustavo Siqueira, Bruno Santos e Carlos Escouto

## Contribute

Please do! Check out our [Contributing guidelines](CONTRIBUTING.md).

## License

[MIT](LICENSE) © 2019-2019 Brid-IT
