import getManifest from '../getManifest';

require('dotenv').config();

let files;
const isProd = process.env.NODE_ENV === 'production';

if (isProd) {
  files = getManifest();
}

const render = (html, preloadedState) => {
  return (`
    <!DOCTYPE html>
      <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
            <title>Trip Inc</title>
            <link rel="stylesheet" type="text/css" href="${isProd ? files['main.css'] : 'assets/app.css'}" />
            <link rel="shortcut icon" href="${isProd ? files['assets/HojaT.png'] : 'assets/1977e35ccbb72bb5c6c281c708ac5fd4.png'}" />
            <style>
            body {
                margin: 0;
                background-image: linear-gradient(#eaeaea, #ecf4f3);
                color: black;
                font-family: 'Nunito', sans-serif;
              }
            </style>
        </head>
        <body>
            <div id="app">${html}</div>
            <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
      /</g,
      '\\u003c',
    )}
        </script>
            <script src="${isProd ? files['main.js'] : 'assets/app.js'}" type="text/javascript"></script>
            <script src="${isProd ? files['vendors.js'] : 'assets/vendor.js'}" type="text/javascript"></script>
        </body>
        </html>
    `);
};

export default render;
