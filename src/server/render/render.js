import getManifest from '../getManifest';

const files = getManifest();

const render = (html, preloadedState) => {
  return (`
    <!DOCTYPE html>
      <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Trip Inc</title>
            <link rel="stylesheet" href="${files['main.css']}" type="text/css">
            <link rel="shortcut icon" href="${files['assets/HojaT.png']}" />
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
            <script src="${files['main.js']}" type="text/javascript"></script>
            <script src="${files['vendors.js']}" type="text/javascript"></script>
        </body>
        </html>
    `);
};

export default render;
