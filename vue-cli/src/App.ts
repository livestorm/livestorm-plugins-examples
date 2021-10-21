import { Modal } from '@livestorm/plugin'

const mainJS = require('./external-app/dist/js/app.js').default;
const vendorJS = require('./external-app/dist/js/chunk-vendors.js').default;
const mainCSS = require('./external-app/dist/css/app.css').default;

export default function (): void {
  Modal.showIframe({
    size: 'extraLarge',
    template: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Vite App</title>
        <script>
          {{ mainJS }}
        </script>

      </head>
      <body><noscript><strong>We're sorry but hello-world doesn't work properly without JavaScript enabled. Please enable it
                to continue.</strong></noscript>
        <div id="app"></div>
        <script>
          {{ vendorJS }}
        </script>
        <script>
        {{ mainJS }}
        </script>
        <style type="text/css">
            {{ mainCSS }}
        </style>
    </body>
    </html>
    `,
    variables: {
      mainJS,
      vendorJS,
      mainCSS
    }
  })
}