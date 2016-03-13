import classnames from 'classnames';
import React from 'react';
import navConfig from '../../../config/nav-menu.json';

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
  makeMenu() {
    return navConfig['nav-menu'].map(item => {
      return this.props.url === item.href ? null : <li><a href={item.href}>{item.title}</a></li>;
    });
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
        <ul className={classnames({
            'menu--container': true,
            'is-open': this.state.menuOpen
          })}>
          {this.makeMenu()}
        </ul>
        <div className='contact-summary'>
          <div className='contact-content'>sales@amplestorage.co.uk</div>
          <div className='contact-content'>01702 531125</div>
        </div>
        <h1 className='page-title'>
          {this.props.pageTitle}
        </h1>
        {this.props.children}
      </div>
    );
  }
}