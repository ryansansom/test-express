import classnames from 'classnames';
import React from 'react';

if (process.env.CLIENT_RENDER) {
  require('./small.less');
}

export default class MainLayout extends React.Component {
  constructor() {
    super();
    this.state = {menuOpen: false};
    this.doSomethingOnClick = this.doSomethingOnClick.bind(this);
  }
  doSomethingOnClick(evt){
    evt.preventDefault();
    return this.setState({menuOpen: !this.state.menuOpen});
  }

  render() {
    return (
      <div>
        <div className='header'>
          <span className='icon-brand-logo' />
          <a
            className='header--menu'
            onClick={this.doSomethingOnClick}>
            {'Menu'}
          </a>
        </div>
        <div className={classnames({
          'menu--container': true,
          'is-open': this.state.menuOpen
        })}>

        </div>
        {this.props.children}
      </div>
    );
  }
}