import ReactDOM from 'react-dom';
import React from 'react';

// Add standard css here
if (process.env.CLIENT_RENDER) {
  require('./assets/styles/normalize.less');
  require('./assets/styles/icons.less');
  require('./assets/styles/standard.less');
}

export default function (Page) {
  return ReactDOM.render(<Page />, document.getElementById("content"));
}