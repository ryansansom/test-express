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
         <a
           className='header--menu'
           onClick={}>
           {'Menu'}
         </a>
       </div>
       {this.props.children}
     </div>
   );
 }
}