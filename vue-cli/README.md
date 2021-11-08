# Livestorm plugin Vue CLI

![Vue CLI example](https://github.com/livestorm/livestorm-plugins-examples/blob/master/vue-cli/example.png?raw=true)

The goal of this plugin is to show that it is possible to use Vue CLI inside a Livestorm in order to benefit from its advantages.

If you are interested in building a plugin using Vue CLI, we recommend you to start with a fresh install of a Vue CLI project since you will probably want to customize it.

If you do so, don't forget to disable the file name hashing option as explained in the [documentation](https://developers.livestorm.co/docs/templating#disable-the-file-name-hashing-option)

```
// vue.config.js

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  "filenameHashing": false,
}
```

## The APIs used

### `Modal.showIframe()`

This API is used to display a modal with custom HTML content.
Useful for many use cases including : forms, call to actions, information box, etc

Find out more about this API [here](https://developers.livestorm.co/docs/modal#showiframe).

## Requirements

- NodeJS (any recent version >12 will do)
- npm
- yarn (this is optionnal but below commands use it)

## Getting started

First off, install the Livestorm plugin CLI : 

```
yarn global add @livestorm/cli
```

Then create an `environments.json` file at the root and fill in your credentials following [this guide](https://developers.livestorm.co/docs/managing-environments).

Then run :
```
yarn
livestorm publish
```

And voilà !
