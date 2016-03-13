import ReactDOM from 'react-dom';
import React from 'react';

// Add standard css here
if (process.env.CLIENT_RENDER) {
  require('./assets/styles/normalize.less');
  require('./assets/styles/icons.less');
  require('./assets/styles/standard.less');
}

export default function (Page) {
  let propsJson = document.documentElement.getAttribute('page-props');
   let props;
   if (propsJson) {
     try {
       props = JSON.parse(propsJson);
     } catch (e) {
       console.error('There was an error trying to parse "page-props"'); //eslint-disable-line no-console
     }
   }
  return ReactDOM.render(<Page {...props}/>, document.getElementById("content"));
}