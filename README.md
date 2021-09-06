<img src="https://raw.githubusercontent.com/livestorm/livestorm-plugin-cli/master/src/assets/sdk-header.png" width="500px">

### Livestorm Plugins Examples

You will find in this repository a list of plugins we decided to open source just to showcase what you can do with Livestorm SDK.

Feel free to inspire from these plugins and fork them as you want.

Check out our [getting started Guide](https://developers.livestorm.co/docs/getting-started-with-plugins-sdk/) and our [offical video course](https://fast.wistia.net/embed/channel/azooxwj070).

| Plugin | Demo | Description | APIs used |
|------|--------|-----------|---------|
| [Emoji Reaction](https://github.com/livestorm/livestorm-plugins-examples/tree/master/emoji-reactions) | ![demo](https://github.com/livestorm/livestorm-plugins-examples/raw/master/emoji-reactions/animation.gif?raw=true) | React to your events with Emojis ! | Chat.send, PubSub.subscribe, Storage.setItem, NotificationCenter.showIframe, Stage.Buttons, When.eventEnds, Configuration |
| [Virtual backgrounds](https://github.com/livestorm/livestorm-plugins-examples/tree/master/virtual-backgrounds) | ![demo](https://github.com/livestorm/livestorm-plugins-examples/raw/master/virtual-backgrounds/animation.gif?raw=true) | Apply virtual backgrounds to your webcam | Stream.registerCameraEffect, Stream.registerMultipleCameraEffects, Stream.registerCameraEffectButton, Configuration |
| [Direct Messaging](https://github.com/livestorm/livestorm-plugins-examples/tree/master/direct-messaging) | ![demo](https://github.com/livestorm/livestorm-plugins-examples/raw/master/direct-messaging/animation.gif?raw=true) | Send private messages to other attendees | Chat.intercept, Chat.send, PubSub.subscribe, PubSub.publish, Chat.Buttons.registerChatShareButton, Chat.registerMessageAction |
| [Slack Chat](https://github.com/livestorm/livestorm-plugins-examples/tree/master/slack-chat) | ![demo](https://github.com/livestorm/livestorm-plugins-examples/raw/master/slack-chat/animation.gif?raw=true) | Forward chat messages of ended events to a Slack Channel | When.eventEnds, Chat.send, Users.me |
| [Embed Site via Chat](https://github.com/livestorm/livestorm-plugins-examples/tree/master/embed-site-via-chat) | ![demo](https://github.com/livestorm/livestorm-plugins-examples/raw/master/embed-site-via-chat/animation.gif?raw=true) | Easily embed webpages using a chat command | Chat.intercept, Chat.send, Streams.addStream, Users.me |
| [Custom Background](https://github.com/livestorm/livestorm-plugins-examples/tree/master/custom-background) | ![demo](https://github.com/livestorm/livestorm-plugins-examples/raw/master/custom-background/animation.gif?raw=true) | Change Livestorm background color from the dashboard settings | Theme.setBackground, PubSub, Storage, Settings |
| [Share Figma File](https://github.com/livestorm/livestorm-plugins-examples/tree/master/share-figma-file) | ![demo](https://github.com/livestorm/livestorm-plugins-examples/raw/master/share-figma-file/animation.gif?raw=true) | Share a Figma file in the stage | Stage.Buttons.registerShareButton, Modal.showIframe, Streams.addStream, Configuration |