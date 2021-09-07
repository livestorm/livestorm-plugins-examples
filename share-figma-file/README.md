# Livestorm plugin Share Figma File

Share a Figma file to the stage.

![reaction example](https://github.com/livestorm/livestorm-plugins-examples/blob/master/share-figma-file/animation.gif?raw=true)

[Read the full documentation of Livestorm Plugins](https://github.com/livestorm/livestorm-plugin)

## The APIs used

### `Stage.Buttons.registerShareButton`

First, the plugin adds a button in the share dropdown of the stage.

Find out more about this API [here](https://developers.livestorm.co/docs/stage).

#### `Modal.showIframe`

When a user clicks in the share button, a modal opens including the UI offering a way to insert an URL of a Figma File. The user has automatically a preview of what he is about to share. 
To close the modal when the user clicks a button of the form, the function `closeModal` is used within the template itself. The URL of the Figma file is passed from the template to the plugin using the native `postMessage` function.

Find out more about this API [here](https://developers.livestorm.co/docs/modal).

#### `Streams.addStream`

After receiving the URL of the Figma File to share, the plugin adds a stream with the iframe of Figma as a template.

Find out more about this API [here](https://developers.livestorm.co/docs/storage).

#### `Configuration`

We use the `Configuration` API to get some data such as the session ID for tracking purposes, and also to get the language of the event in order to display translated strings.
In this case, the `locale` property is used to display translated messages.

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
