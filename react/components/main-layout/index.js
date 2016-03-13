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
          <label
            className='header--menu'
            htmlFor='menu-open'>
            {'Menu'}
          </label>
        </div>
        <input
          type='checkbox'
          checked={this.state.menuOpen}
          className='menu--toggle'
          id='menu-open'
          onChange={this.doSomethingOnClick} />
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