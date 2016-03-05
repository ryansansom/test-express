import React from 'react';

if (process.env.CLIENT_RENDER) {
  require('./small.less');
}

// Will become main layout
export default class MainLayout extends React.Component {
 render() {
   return (
     <div>
       <div className='header'>
         <span className='icon-brand-logo' />
         {'Ample Storage'}
       </div>
       {this.props.children}
     </div>
   );
 }
}