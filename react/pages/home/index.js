import React from "react";
import renderClient from '../../client.js';
import render from '../../server.js';

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <div className='header'>
          {'Ample Storage'}
        </div>
      </div>
    );
  }
}

export default function () {
  return render(MainPage);
}

//client rendering
if (process.env.CLIENT_RENDER) {
  require('./small.less');
  renderClient(MainPage);
}