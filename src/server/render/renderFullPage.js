const renderFullPage = (html, initialState) => {
  return `
    <!doctype html>
    <html>
    <head>
      <meta charset = 'utf-8'>
      <meta name = 'viewport'
            content='width=device-width, initial-scale=1, shrink-to-fit=no'>
      <title>Typing Teacher</title>
      <link href="https://fonts.googleapis.com/css?family=Roboto"
            rel="stylesheet">
      <link href="/css/app.css" rel="stylesheet">
    </head>
    <body>
      <div id="root">${ html }</div>
      <script>
        window.__INITIAL_STATE__ = ${ JSON.stringify(initialState) }
      </script>
      <script src="/js/vendor.js"></script>
      <script src="/js/client.js"></script>
    </body>
  </html>
  `;
};

export default renderFullPage;
