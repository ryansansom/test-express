import React from 'react';

if (process.env.CLIENT_RENDER) {
  require('./small.less');
}

// Will become main layout
export default class MainLayout extends React.component {
 render() {
   return (
     <div></div>
   );
 }
}