import  { Modal, Stage, Streams } from '@livestorm/plugin'
import i18n from './i18n'

const figmaModal = require('./figma.html').default
const messages = i18n()

export default function(): void {
  Stage.Buttons.registerShareButton({
    'label': messages['label'],
    'icon': 'figma-logo',
    'onClick': () => {
      Modal.showIframe({
        'size': 'large',
        template: figmaModal,
        variables: {
          title: messages['title'],
          description: messages['description'],
          cancel: messages['cancel'],
          share: messages['share'],
          warning: messages['warning'],
        },
        onMessage: (message: { iframe: string }) => {
          Streams.addStream({
            'title': 'Shared Figma file',
            'imageUrl': 'toto',
            'template': `
              ${message.iframe}
              <style type="text/css">
                html,
                body {
                  height: 100%;
              }
              </style>
            `,
            'variables': {},
            'onMessage': () => {
              //
            }
          })
        }
      })
    }
  })
}
